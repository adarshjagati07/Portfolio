const activities = [
	{
		title: "Core Team Member and Social Media Head",
		company: "Google DSC Ujjain",
		description: "Hosted workshops on Node.js and React.js, managing social media presence and community engagement.",
		icon: "🎯",
		date: "2023 - Present"
	},
	{
		title: "Core Technical Team Member",
		company: "Xception (Socio-Technical Fest)",
		description: "Developed event website for college's socio-technical festival, showcasing technical expertise.",
		icon: "💻",
		date: "2023"
	},
	{
		title: "Frontend Development Certification",
		company: "Meta & Coursera",
		description: "Certified in Introduction to Frontend by Meta and React.js by Coursera.",
		icon: "📜",
		date: "2023"
	},
	{
		title: "Computer Vision Builder",
		company: "IIT Delhi",
		description: "Completed Computer Vision Builder certification in Computer Vision and Machine Learning.",
		icon: "🤖",
		date: "2023"
	},
	{
		title: "Web Development Bootcamp",
		company: "Udemy",
		description: "Completed comprehensive Web Development Bootcamp certification in Web Technologies.",
		icon: "🌐",
		date: "2023"
	}
];

const ActivityItem = ({ activity, index }) => {
	return (
		<div className="flex items-start space-x-6 py-6 border-b border-neutral-700 last:border-b-0">
			<div className="flex-shrink-0">
				<div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
					<span className="text-xl">{activity.icon}</span>
				</div>
			</div>

			<div className="flex-1 min-w-0">
				<h3 className="text-white font-bold text-lg mb-2">{activity.title}</h3>
				<p className="text-secondary text-[16px] font-semibold mb-2">{activity.company}</p>
				<p className="text-white-100 text-[14px] leading-relaxed">{activity.description}</p>
			</div>
		</div>
	);
};

const Activities = () => {
	return (
		<div className="max-w-7xl mx-auto relative z-0">
			<div>
				<p className="text-secondary text-[14px] uppercase tracking-wider text-center">What I've been up to</p>
				<h2 className="text-white font-black md:text-[50px] sm:text-[40px] xs:text-[35px] text-[25px] text-center">Activities & Certifications</h2>
			</div>

			<div className="w-full flex justify-center">
				<p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center">
					Here are my key activities, certifications, and achievements that showcase my skills and dedication to continuous learning and community involvement.
				</p>
			</div>

			<div className="mt-20 flex justify-center">
				<div className="bg-tertiary rounded-2xl p-8 max-w-5xl w-full">
					{activities.map((activity, index) => (
						<ActivityItem
							key={`activity-${index}`}
							activity={activity}
							index={index}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Activities;
