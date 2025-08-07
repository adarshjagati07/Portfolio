import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
	const skills = ["auth0", "blazor", "cplusplus", "csharp", "css3", "dotnet", "dotnetcore", "git", "html5", "javascript", "microsoft", "react", "sqlite", "tailwindcss", "vitejs", "wordpress"];

	return (
		<div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
			<OrbitingCircles iconSize={40}>
				{skills.map((skill, index) => (
					<Icon
						key={index}
						src={`/assets/logos/${skill}.svg`}
						skill={skill}
					/>
				))}
			</OrbitingCircles>
			<OrbitingCircles
				iconSize={25}
				radius={100}
				reverse
				speed={2}
			>
				{skills
					.slice()
					.reverse()
					.map((skill, index) => (
						<Icon
							key={index}
							src={`/assets/logos/${skill}.svg`}
							skill={skill}
						/>
					))}
			</OrbitingCircles>
		</div>
	);
}

const Icon = ({ src, skill }) => (
	<div className="flex items-center justify-center w-full h-full bg-white/10 rounded-full p-1">
		<img
			src={src}
			alt={skill}
			className="w-6 h-6 object-contain"
			onError={(e) => {
				// Fallback to placeholder if image fails to load
				e.target.style.display = "none";
				e.target.nextElementSibling.style.display = "flex";
			}}
		/>
		<div
			className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded flex items-center justify-center text-white text-xs font-bold"
			style={{ display: "none" }}
		>
			{skill.charAt(0).toUpperCase()}
		</div>
	</div>
);
