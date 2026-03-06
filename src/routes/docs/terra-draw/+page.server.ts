import { highlightCode } from "$lib/highlight";
import { getExampleSource } from "$lib/examples";

export const load = async () => {
	const source = getExampleSource("TerraDrawExample");

	return {
		source,
		highlighted: await highlightCode(source, "svelte"),
	};
};
