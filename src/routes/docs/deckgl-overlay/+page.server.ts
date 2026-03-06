import { highlightCode } from "$lib/highlight";
import { getExampleSource } from "$lib/examples";

export const load = async () => {
	const arcSource = getExampleSource("DeckGLOverlayExample");
	const accidentSource = getExampleSource("DeckGLAccidentExample");

	return {
		sources: { arc: arcSource, accident: accidentSource },
		highlighteds: {
			arc: await highlightCode(arcSource, "svelte"),
			accident: await highlightCode(accidentSource, "svelte"),
		},
	};
};
