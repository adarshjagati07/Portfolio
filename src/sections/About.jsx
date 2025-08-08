import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
	const grid2Container = useRef();
	return (
		<section
			className="c-space py-10 sm:py-20"
			id="about"
		>
			<div>
				<p className="text-secondary text-[12px] sm:text-[14px] uppercase tracking-wider text-center">Introduction</p>
				<h2 className="text-white font-black md:text-[50px] sm:text-[40px] xs:text-[35px] text-[25px] text-center">About Me</h2>
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-8 sm:mt-12">
				{/* Grid 1 - About Me (stays first) */}
				<div className="flex items-end grid-default-color grid-1 order-1">
					<img
						src="assets/coding-pov.png"
						className="absolute scale-[1.25] sm:scale-[1.75] -right-[3rem] sm:-right-[5rem] -top-[0.5rem] sm:-top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
						alt="Coding perspective"
					/>
					<div className="z-10">
						<p className="headtext text-base sm:text-lg md:text-xl lg:text-2xl">Hi, I&apos;m Adarsh Narayan Jagati</p>
						<p className="subtext text-xs sm:text-sm md:text-base">
							Fueled by passion and practice, I&apos;ve spent years shaping my frontend and backend skills into powerful, dynamic digital solutions..
						</p>
						<div className="mt-3 sm:mt-4">
							<a
								href="https://drive.google.com/file/d/1oFDwDZBb3CGhxKm74OhQM433zq5LJzw6/view?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-[#915eff] to-[#7a57db] text-white rounded-lg hover:from-[#7a57db] hover:to-[#915eff] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xs sm:text-sm"
							>
								<svg
									className="w-3 h-3 sm:w-4 sm:h-4"
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

				{/* Grid 2 - Code is Craft (moves to third in mobile) */}
				<div className="grid-default-color grid-2 order-3 md:order-2">
					<div
						ref={grid2Container}
						className="flex items-center justify-center w-full h-full"
					>
						<p className="flex items-end text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500">CODE IS CRAFT</p>
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

				{/* Grid 3 - Time Zone (moves to second in mobile) */}
				<div className="grid-black-color grid-3 order-2 md:order-3">
					<div className="z-10 w-[60%] sm:w-[50%]">
						<p className="headtext text-base sm:text-lg md:text-xl lg:text-2xl">Time Zone</p>
						<p className="subtext text-xs sm:text-sm md:text-base">I&apos;m based in India, and open to remote work worldwide</p>
					</div>
					<figure className="absolute left-[15%] sm:left-[20%] top-[5%] w-32 h-32 sm:w-48 sm:h-48">
						<Globe className="w-full h-full" />
					</figure>
				</div>

				{/* Grid 4 - Contact (stays fourth) */}
				<div className="grid-special-color grid-4 order-4">
					<div className="flex flex-col items-center justify-center gap-3 sm:gap-4 size-full">
						<p className="text-center headtext text-base sm:text-lg md:text-xl lg:text-2xl">Do you want to start a project together?</p>
						<CopyEmailButton />
					</div>
				</div>

				{/* Grid 5 - Tech Stack (stays fifth) */}
				<div className="grid-default-color grid-5 order-5">
					<div className="z-10 w-[60%] sm:w-[50%]">
						<p className="headtext text-base sm:text-lg md:text-xl lg:text-2xl">Tech Stack</p>
						<p className="subtext text-xs sm:text-sm md:text-base">I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications</p>
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
