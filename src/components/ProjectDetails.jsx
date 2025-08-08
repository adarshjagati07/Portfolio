import { motion } from "framer-motion";
import { useEffect } from "react";

const ProjectDetails = ({ title, description, subDescription, image, tags, href, closeModal }) => {
	// Prevent body scroll when modal is open
	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, []);

	// Handle click outside modal to close
	const handleBackdropClick = (e) => {
		if (e.target === e.currentTarget) {
			closeModal();
		}
	};

	// Handle escape key to close modal
	useEffect(() => {
		const handleEscape = (e) => {
			if (e.key === "Escape") {
				closeModal();
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => {
			document.removeEventListener("keydown", handleEscape);
		};
	}, [closeModal]);

	return (
		<div
			className="fixed inset-0 z-[9999] flex items-start justify-center w-full h-full overflow-hidden backdrop-blur-sm bg-black/50 pt-10 sm:pt-20"
			onClick={handleBackdropClick}
		>
			<motion.div
				className="relative max-w-4xl mx-2 sm:mx-4 max-h-[90vh] sm:max-h-[85vh] overflow-y-auto border shadow-2xl rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
				initial={{ opacity: 0, scale: 0.5, y: 50 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				exit={{ opacity: 0, scale: 0.5, y: 50 }}
				transition={{ duration: 0.3, ease: "easeOut" }}
			>
				<button
					onClick={closeModal}
					className="absolute p-2 rounded-full top-2 sm:top-4 right-2 sm:right-4 bg-midnight/80 hover:bg-gray-600 transition-colors duration-200 z-10"
					aria-label="Close modal"
				>
					<svg
						className="w-4 h-4 text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
				<div className="relative w-full bg-black/20 rounded-t-2xl overflow-hidden">
					<img
						src={image}
						alt={title}
						className="w-full h-auto max-h-48 sm:max-h-96 object-contain"
						onError={(e) => {
							e.target.style.display = "none";
						}}
					/>
				</div>
				<div className="p-4 sm:p-6">
					<h5 className="mb-3 text-lg sm:text-xl md:text-2xl font-bold text-white">{title}</h5>
					<p className="mb-4 font-normal text-neutral-400 leading-relaxed text-sm sm:text-base">{description}</p>
					{subDescription &&
						subDescription.map((subDesc, index) => (
							<p
								key={index}
								className="mb-3 font-normal text-neutral-400 leading-relaxed text-sm sm:text-base"
							>
								{subDesc}
							</p>
						))}
					<div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10 gap-3 sm:gap-0">
						<div className="flex gap-2 sm:gap-3">
							{tags &&
								tags.map((tag) => (
									<div
										key={tag.id}
										className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
									>
										<span className="text-xs font-bold text-white">{tag.name.charAt(0)}</span>
									</div>
								))}
						</div>
						{href && (
							<a
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-[#915eff] to-[#7a57db] text-white rounded-lg hover:from-[#7a57db] hover:to-[#915eff] transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
							>
								View Project
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
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg>
							</a>
						)}
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default ProjectDetails;
