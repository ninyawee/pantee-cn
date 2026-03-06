import { highlightCode } from "$lib/highlight";
import { getExampleSource } from "$lib/examples";

export const load = async () => {
	const plainMapSource = getExampleSource("PlainMapExample");

	return {
		plainMapSource,
		plainMapHighlighted: await highlightCode(plainMapSource, "svelte"),
	};
};
