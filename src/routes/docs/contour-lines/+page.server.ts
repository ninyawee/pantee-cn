import { highlightCode } from "$lib/highlight";
import { getExampleSource } from "$lib/examples";

export const load = async () => {
	const source = getExampleSource("ContourLinesExample");

	return {
		source,
		highlighted: await highlightCode(source, "svelte"),
	};
};
