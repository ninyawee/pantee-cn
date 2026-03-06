import { highlightCode } from "$lib/highlight";
import { getExampleSource } from "$lib/examples";

export const load = async () => {
	const controlsSource = getExampleSource("MapControlsExample");
	const customControlSource = getExampleSource("CustomControlExample");

	return {
		controlsSource,
		controlsHighlighted: await highlightCode(controlsSource, "svelte"),
		customControlSource,
		customControlHighlighted: await highlightCode(customControlSource, "svelte"),
	};
};
