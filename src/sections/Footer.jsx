import { mySocials } from "../constants";

const Footer = () => {
	return (
		<section className="c-space">
			{/* Separator line - full width */}
			<div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full mb-6" />

			{/* Footer content - properly spaced */}
			<div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 py-6 text-xs sm:text-sm text-neutral-400">
				<div className="flex gap-2 text-center whitespace-nowrap">
					<p>Terms & Conditions</p>
					<p>|</p>
					<p>Privacy Policy</p>
				</div>
				<div className="flex gap-2 sm:gap-3">
					{mySocials.map((social, index) => (
						<a
							href={social.href}
							key={index}
							className="hover:scale-110 transition-transform duration-200"
							target="_blank"
							rel="noopener noreferrer"
							title={social.name}
						>
							<div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
								<img
									src={social.icon}
									alt={social.name}
									className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
								/>
							</div>
						</a>
					))}
				</div>
				<p className="text-center whitespace-nowrap">© 2025 Adarsh Jagati. All rights reserved.</p>
			</div>
		</section>
	);
};

export default Footer;
