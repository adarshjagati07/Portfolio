import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Projects = () => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const springX = useSpring(x, { damping: 10, stiffness: 50 });
	const springY = useSpring(y, { damping: 10, stiffness: 50 });

	const handleMouseMove = (e) => {
		x.set(e.clientX + 20);
		y.set(e.clientY + 20);
	};

	const [preview, setPreview] = useState(null);

	return (
		<section
			onMouseMove={handleMouseMove}
			className="relative c-space py-20"
			id="projects"
		>
			<div>
				<p className="text-secondary text-[14px] uppercase tracking-wider text-center">My work</p>
				<h2 className="text-white font-black md:text-[50px] sm:text-[40px] xs:text-[35px] text-[25px] text-center">Selected Projects</h2>
			</div>
			<div className="max-w-6xl mx-auto pl-4 md:pl-0">
				{myProjects.map((project) => (
					<Project
						key={project.id}
						{...project}
						setPreview={setPreview}
					/>
				))}
			</div>
			{preview && (
				<motion.img
					className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
					src={preview}
					style={{ x: springX, y: springY }}
				/>
			)}
		</section>
	);
};

export default Projects;
