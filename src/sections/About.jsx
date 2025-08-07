import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
	const grid2Container = useRef();
	return (
		<section
			className="c-space py-20"
			id="about"
		>
			<div>
				<p className="text-secondary text-[14px] uppercase tracking-wider text-center">Introduction</p>
				<h2 className="text-white font-black md:text-[50px] sm:text-[40px] xs:text-[35px] text-[25px] text-center">About Me</h2>
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
				{/* Grid 1 */}
				<div className="flex items-end grid-default-color grid-1">
					<img
						src="assets/coding-pov.png"
						className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
						alt="Coding perspective"
					/>
					<div className="z-10">
						<p className="headtext">Hi, I&apos;m Adarsh Narayan Jagati</p>
						<p className="subtext">Over the last few years, I developed my frontend and backend dev skills to deliver dynamic and software and web applications.</p>
						<div className="mt-4">
							<a
								href="https://drive.google.com/file/d/1oFDwDZBb3CGhxKm74OhQM433zq5LJzw6/view?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#915eff] to-[#7a57db] text-white rounded-lg hover:from-[#7a57db] hover:to-[#915eff] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
							>
								<svg
									className="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
									/>
								</svg>
								Download Resume
							</a>
						</div>
					</div>
					<div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
				</div>
				{/* Grid 2 */}
				<div className="grid-default-color grid-2">
					<div
						ref={grid2Container}
						className="flex items-center justify-center w-full h-full"
					>
						<p className="flex items-end text-5xl text-gray-500">CODE IS CRAFT</p>
						<Card
							style={{ rotate: "75deg", top: "30%", left: "20%" }}
							text="Engineering"
							containerRef={grid2Container}
						/>
						<Card
							style={{ rotate: "-30deg", top: "60%", left: "45%" }}
							text="SOLID"
							containerRef={grid2Container}
						/>
						<Card
							style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
							text="Full Stack"
							containerRef={grid2Container}
						/>
						<Card
							style={{ rotate: "-45deg", top: "55%", left: "0%" }}
							text="Design Principles"
							containerRef={grid2Container}
						/>
						<Card
							style={{ rotate: "20deg", top: "10%", left: "38%" }}
							text="Java"
							containerRef={grid2Container}
						/>
						<Card
							style={{ rotate: "20deg", top: "10%", left: "38%" }}
							text="MERN"
							containerRef={grid2Container}
						/>
					</div>
				</div>
				{/* Grid 3 */}
				<div className="grid-black-color grid-3">
					<div className="z-10 w-[50%]">
						<p className="headtext">Time Zone</p>
						<p className="subtext">I&apos;m based in India, and open to remote work worldwide</p>
					</div>
					<figure className="absolute left-[20%] top-[5%] w-48 h-48">
						<Globe className="w-full h-full" />
					</figure>
				</div>
				{/* Grid 4 */}
				<div className="grid-special-color grid-4">
					<div className="flex flex-col items-center justify-center gap-4 size-full">
						<p className="text-center headtext">Do you want to start a project together?</p>
						<CopyEmailButton />
					</div>
				</div>
				{/* Grid 5 */}
				<div className="grid-default-color grid-5">
					<div className="z-10 w-[50%]">
						<p className="headtext">Tech Stack</p>
						<p className="subtext">I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications</p>
					</div>
					<div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
						<Frameworks />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
