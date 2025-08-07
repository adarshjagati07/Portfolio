import { mySocials } from "../constants";

const Footer = () => {
	return (
		<section className="flex flex-wrap items-center justify-center md:justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
			<div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
			<div className="flex gap-2">
				<p>Terms & Conditions</p>
				<p>|</p>
				<p>Privacy Policy</p>
			</div>
			<div className="flex gap-3">
				{mySocials.map((social, index) => (
					<a
						href={social.href}
						key={index}
						className="hover:scale-110 transition-transform duration-200"
						target="_blank"
						rel="noopener noreferrer"
						title={social.name}
					>
						<div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
							<img
								src={social.icon}
								alt={social.name}
								className="w-5 h-5 object-contain"
							/>
						</div>
					</a>
				))}
			</div>
			<p>© 2025 Adarsh Jagati. All rights reserved.</p>
		</section>
	);
};

export default Footer;
