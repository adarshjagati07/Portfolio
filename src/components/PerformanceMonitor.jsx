import { useEffect } from "react";

const PerformanceMonitor = () => {
	useEffect(() => {
		// Simple performance monitoring without complex observers
		const startTime = performance.now();

		// Log initial load time
		window.addEventListener("load", () => {
			const loadTime = performance.now() - startTime;
			console.log("Page Load Time:", loadTime.toFixed(2), "ms");
		});

		// Monitor memory usage
		if ("memory" in performance) {
			setInterval(() => {
				const memory = performance.memory;
				console.log("Memory Usage:", {
					used: Math.round(memory.usedJSHeapSize / 1048576) + " MB",
					total: Math.round(memory.totalJSHeapSize / 1048576) + " MB",
					limit: Math.round(memory.jsHeapSizeLimit / 1048576) + " MB"
				});
			}, 10000); // Log every 10 seconds
		}
	}, []);

	return null;
};

export default PerformanceMonitor;
