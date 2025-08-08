import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";

const Experiences = () => {
	return (
		<div
			id="work"
			className="w-full c-space py-6 sm:py-10"
		>
			<Timeline data={experiences} />
		</div>
	);
};

export default Experiences;
