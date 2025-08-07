import { BrowserRouter } from "react-router-dom";
import PerformanceMonitor from "./components/PerformanceMonitor";

// Import components directly for now to fix crashing
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Activities from "./sections/Activities";

const App = () => {
	return (
		<BrowserRouter>
			<PerformanceMonitor />
			<div className="relative z-0 bg-primary">
				{/* Navbar + Hero from Portfolio-2 */}
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
				</div>

				{/* About from Portfolio-1 */}
				<About />
				<div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full max-w-7xl mx-auto" />

				{/* Projects from Portfolio-1 */}
				<Projects />
				<div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full max-w-7xl mx-auto" />

				{/* Experiences from Portfolio-1 */}
				<Experiences />
				<div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full max-w-7xl mx-auto" />

				{/* Education from Portfolio-2 */}
				<div
					className="relative z-0 c-space py-10"
					id="education"
				>
					<Education />
				</div>
				<div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full max-w-7xl mx-auto" />

				{/* Activities and Certifications */}
				<div className="relative z-0 c-space py-20">
					<Activities />
				</div>
				<div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full max-w-7xl mx-auto" />

				{/* Contact from Portfolio-1 */}
				<Contact />

				{/* Footer from Portfolio-1 */}
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
