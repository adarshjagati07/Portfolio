import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProjectDetails from "./ProjectDetails";

const Project = ({ title, description, subDescription, href, image, tags, setPreview }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<div
				className="flex-wrap items-center justify-between py-6 sm:py-10 space-y-8 sm:space-y-14 sm:flex sm:space-y-0"
				onMouseEnter={() => setPreview && setPreview(image)}
				onMouseLeave={() => setPreview && setPreview(null)}
			>
				<div>
					<p className="text-lg sm:text-xl md:text-2xl">{title}</p>
					<div className="flex flex-wrap gap-3 sm:gap-5 mt-2 text-sand">
						{tags &&
							tags.map((tag) => (
								<span
									key={tag.id}
									className="text-xs sm:text-sm"
								>
									{tag.name}
								</span>
							))}
					</div>
				</div>
				<button
					onClick={() => setIsModalOpen(true)}
					className="flex items-center gap-1 cursor-pointer hover-animation text-sm sm:text-base"
				>
					Read More →
				</button>
			</div>
			<div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
			<AnimatePresence>
				{isModalOpen && (
					<ProjectDetails
						key={`modal-${title}`}
						title={title}
						description={description}
						subDescription={subDescription}
						image={image}
						tags={tags}
						href={href}
						closeModal={() => setIsModalOpen(false)}
					/>
				)}
			</AnimatePresence>
		</>
	);
};

export default Project;
