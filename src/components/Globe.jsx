"use client";

import createGlobe from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useMemo } from "react";

import { twMerge } from "tailwind-merge";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG = {
	width: 800,
	height: 800,
	onRender: () => {},
	devicePixelRatio: 2,
	phi: 0,
	theta: 0.3,
	dark: 1,
	diffuse: 0.4,
	mapSamples: 8000, // Reduced from 16000
	mapBrightness: 1.2,
	baseColor: [1, 1, 1],
	markerColor: [1, 1, 1],
	glowColor: [1, 1, 1],
	markers: [
		{ location: [19.076, 72.8777], size: 0.1 }, // Mumbai
		{ location: [40.7128, -74.006], size: 0.1 }, // New York
		{ location: [51.5074, -0.1278], size: 0.08 }, // London
		{ location: [35.6762, 139.6503], size: 0.08 }, // Tokyo
		{ location: [-33.8688, 151.2093], size: 0.08 } // Sydney
	]
};

export function Globe({ className, config = GLOBE_CONFIG }) {
	let phi = 0;
	let width = 0;
	const canvasRef = useRef(null);
	const pointerInteracting = useRef(null);
	const pointerInteractionMovement = useRef(0);

	const r = useMotionValue(0);
	const rs = useSpring(r, {
		mass: 1,
		damping: 30,
		stiffness: 100
	});

	// Memoize the config to prevent unnecessary re-renders
	const memoizedConfig = useMemo(() => config, [config]);

	const updatePointerInteraction = (value) => {
		pointerInteracting.current = value;
		if (canvasRef.current) {
			canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
		}
	};

	const updateMovement = (clientX) => {
		if (pointerInteracting.current !== null) {
			const delta = clientX - pointerInteracting.current;
			pointerInteractionMovement.current = delta;
			r.set(r.get() + delta / MOVEMENT_DAMPING);
		}
	};

	useEffect(() => {
		const onResize = () => {
			if (canvasRef.current) {
				width = canvasRef.current.offsetWidth;
			}
		};

		window.addEventListener("resize", onResize);
		onResize();

		const globe = createGlobe(canvasRef.current, {
			...memoizedConfig,
			width: width * 2,
			height: width * 2,
			onRender: (state) => {
				if (!pointerInteracting.current) phi += 0.003; // Reduced rotation speed
				state.phi = phi + rs.get();
				state.width = width * 2;
				state.height = width * 2;
			}
		});

		setTimeout(() => (canvasRef.current.style.opacity = "1"), 0);
		return () => {
			globe.destroy();
			window.removeEventListener("resize", onResize);
		};
	}, [rs, memoizedConfig]);

	return (
		<div className={twMerge("mx-auto aspect-[1/1] w-full max-w-[600px]", className)}>
			<canvas
				className={twMerge("size-[30rem] opacity-0 transition-opacity duration-500 [contain:layout_paint_size]")}
				ref={canvasRef}
				onPointerDown={(e) => {
					pointerInteracting.current = e.clientX;
					updatePointerInteraction(e.clientX);
				}}
				onPointerUp={() => updatePointerInteraction(null)}
				onPointerOut={() => updatePointerInteraction(null)}
				onMouseMove={(e) => updateMovement(e.clientX)}
				onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
			/>
		</div>
	);
}
