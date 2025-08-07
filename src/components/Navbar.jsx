import { useState, useEffect } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants/index";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);

	// Smooth scroll function with offset
	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			const navbarHeight = 80; // Approximate navbar height
			const elementPosition = element.offsetTop - navbarHeight;
			window.scrollTo({
				top: elementPosition,
				behavior: "smooth"
			});
		}
	};

	// Close mobile menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (toggle && !event.target.closest(".mobile-menu") && !event.target.closest(".menu-toggle")) {
				setToggle(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [toggle]);

	return (
		<nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary backdrop-blur-sm border-b border-white/10`}>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<div
					className="flex items-center gap-2 cursor-pointer"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<img
						src="/logo.svg"
						alt="logo"
						className="w-9 h-9 object-contain"
					/>
					<p className="text-white text-[18px] font-bold cursor-pointer flex">
						Adarsh Narayan Jagati&nbsp;
						<span className="sm:block hidden">| Software Developer</span>
					</p>
				</div>
				<ul className="list-none hidden sm:flex flex-row gap-10">
					{navLinks.map((link) => {
						return (
							<li
								key={link.id}
								className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-200`}
								onClick={() => {
									setActive(link.title);
									scrollToSection(link.id);
								}}
							>
								<a
									href={`#${link.id}`}
									onClick={(e) => e.preventDefault()}
								>
									{link.title}
								</a>
							</li>
						);
					})}
				</ul>
				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						src={toggle ? "/assets/close.svg" : "/assets/menu.svg"}
						alt="menu"
						className="w-[28px] h-[28px] object-contain cursor-pointer menu-toggle"
						onClick={() => setToggle(!toggle)}
					/>
				</div>
				<div className={`${toggle ? "flex" : "hidden"} p-6 black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-lg border border-white/20 mobile-menu`}>
					<ul className="list-none flex justify-end items-start flex-col gap-4">
						{navLinks.map((link) => {
							return (
								<li
									key={link.id}
									className={`${
										active === link.title ? "text-white" : "text-secondary"
									} font-poppins font-medium cursor-pointer text-[16px] hover:text-white transition-colors duration-200`}
									onClick={() => {
										setToggle(!toggle);
										setActive(link.title);
										scrollToSection(link.id);
									}}
								>
									<a
										href={`#${link.id}`}
										onClick={(e) => e.preventDefault()}
									>
										{link.title}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
