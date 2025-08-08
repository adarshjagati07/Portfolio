import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { educationExperiences } from "../constants";
import { textVariant } from "../utils/motion";

const EducationCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: "#1d1836",
				color: "#fff"
			}}
			contentArrowStyle={{ borderRight: "7px solid  #232631" }}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<div className="w-[60%] h-[60%] rounded-full bg-white flex items-center justify-center">
						<span className="text-black font-bold text-lg sm:text-xl">🎓</span>
					</div>
				</div>
			}
		>
			<div>
				<h3 className="text-white text-lg sm:text-xl md:text-[24px] font-bold">{experience.title}</h3>
				<p
					className="text-secondary text-sm sm:text-base md:text-[16px] font-semibold"
					style={{ margin: 0 }}
				>
					{experience.company_name}
				</p>
			</div>

			<ul className="mt-3 sm:mt-5 list-disc ml-3 sm:ml-5 space-y-1 sm:space-y-2">
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className="text-white-100 text-xs sm:text-sm md:text-[14px] pl-1 tracking-wider"
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

const Education = () => {
	return (
		<div className="max-w-7xl mx-auto relative z-0">
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} text-center`}>What I have studied so far</p>
				<h2 className="text-white font-black md:text-[50px] sm:text-[40px] xs:text-[35px] text-[25px] text-center">Education</h2>
			</motion.div>

			<div className="mt-12 sm:mt-20 flex flex-col mb-2">
				<VerticalTimeline>
					{educationExperiences.map((experience, index) => (
						<EducationCard
							key={`experience-${index}`}
							experience={experience}
						/>
					))}
				</VerticalTimeline>
			</div>
		</div>
	);
};

export default Education;
