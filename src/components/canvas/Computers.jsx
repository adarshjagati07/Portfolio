import { Suspense, useEffect, useState, useMemo } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../CanvasLoader";
import { Canvas } from "@react-three/fiber";

const Computers = ({ isMobile }) => {
	const computer = useGLTF("./desktop_pc/scene.gltf");

	// Memoize the primitive to prevent unnecessary re-renders
	const computerPrimitive = useMemo(
		() => (
			<primitive
				object={computer.scene}
				scale={isMobile ? 0.4 : 0.64}
				position={isMobile ? [0, -2, -0.8] : [0, -3.25, -1.5]}
				rotation={[-0.01, 0.5, -0.1]}
			/>
		),
		[computer.scene, isMobile]
	);

	return (
		<mesh>
			<hemisphereLight
				intensity={0.5}
				groundColor="black"
			/>
			<ambientLight intensity={1.8} />
			<pointLight intensity={1} />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapsize={isMobile ? 512 : 1024}
			/>
			{computerPrimitive}
		</mesh>
	);
};

const ComputersCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 500px)");
		setIsMobile(mediaQuery.matches);

		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		};

		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{
				preserveDrawingBuffer: true,
				powerPreference: "high-performance",
				antialias: !isMobile,
				stencil: false,
				depth: true
			}}
			dpr={isMobile ? 1 : window.devicePixelRatio}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
					enableDamping={true}
					dampingFactor={0.05}
				/>
				<Computers isMobile={isMobile} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};
export default ComputersCanvas;
