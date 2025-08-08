import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

export const Timeline = ({ data }) => {
	const ref = useRef(null);
	const containerRef = useRef(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setHeight(rect.height);
		}
	}, [ref]);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start 10%", "end 50%"]
	});

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

	return (
		<div
			id="work"
			className="c-space"
			ref={containerRef}
		>
			<div>
				<p className="text-secondary text-[12px] sm:text-[14px] uppercase tracking-wider text-center">What I have done so far</p>
				<h2 className="text-white font-black md:text-[50px] sm:text-[40px] xs:text-[35px] text-[25px] text-center">Work Experience</h2>
			</div>
			<div
				ref={ref}
				className="relative pb-6 sm:pb-10"
			>
				{data.map((item, index) => (
					<div
						key={index}
						className="flex justify-start pt-6 sm:pt-10 md:pt-40 md:gap-10 relative"
					>
						<div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-20 sm:top-40 lg:max-w-sm md:w-full">
							<div className="absolute flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full -left-[10px] sm:-left-[12px] bg-midnight">
								<div className="w-3 h-3 sm:w-4 sm:h-4 p-1.5 sm:p-2 border rounded-full bg-neutral-800 border-neutral-700" />
							</div>
							<div className="flex-col hidden gap-2 text-lg sm:text-xl font-bold md:flex md:pl-20 md:text-4xl text-neutral-300">
								<h3>{item.date}</h3>
								<h3 className="text-2xl sm:text-3xl text-neutral-400">{item.title}</h3>
								<h3 className="text-2xl sm:text-3xl text-neutral-500">{item.job}</h3>
							</div>
						</div>

						<div className="relative w-full pl-16 sm:pl-20 pr-2 sm:pr-4 md:pl-4 md:pr-0">
							<div className="block mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl font-bold text-left text-neutral-300 md:hidden ">
								<h3 className="text-sm sm:text-base">{item.date}</h3>
								<h3 className="text-sm sm:text-base">{item.job}</h3>
							</div>
							{item.contents.map((content, index) => (
								<p
									className="mb-2 sm:mb-3 font-normal text-neutral-400 text-xs sm:text-sm md:text-base"
									key={index}
								>
									{content}
								</p>
							))}
						</div>
					</div>
				))}
				<div
					style={{
						height: height + "px"
					}}
					className="absolute left-[6px] sm:left-[8px] top-0 overflow-hidden w-[3px] md:w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] z-10"
				>
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform
						}}
						className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
					/>
				</div>
			</div>
		</div>
	);
};

Timeline.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			date: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			job: PropTypes.string.isRequired,
			contents: PropTypes.arrayOf(PropTypes.string).isRequired
		})
	).isRequired
};
