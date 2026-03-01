import { highlightCode } from "$lib/highlight";
import { getExampleSources } from "$lib/examples";

export const load = async () => {
	const advancedUsageSources = getExampleSources(["AdvancedUsageExample", "MapController"]);
	const advancedUsageHighlighted = await Promise.all(
		advancedUsageSources.map((file) => highlightCode(file.code, "svelte"))
	);

	const customLayerSources = getExampleSources(["CustomLayerExample", "CustomLayerContent"]);
	const customLayerHighlighted = await Promise.all(
		customLayerSources.map((file) => highlightCode(file.code, "svelte"))
	);

	const layerMarkersSources = getExampleSources([
		"LayerMarkersExample",
		"LayerMarkersContent",
	]);
	const layerMarkersHighlighted = await Promise.all(
		layerMarkersSources.map((file) => highlightCode(file.code, "svelte"))
	);

	return {
		advancedUsageFiles: advancedUsageSources.map((file, i) => ({
			name: `${file.name}.svelte`,
			code: file.code,
			highlightedCode: advancedUsageHighlighted[i],
		})),
		customLayerFiles: customLayerSources.map((file, i) => ({
			name: `${file.name}.svelte`,
			code: file.code,
			highlightedCode: customLayerHighlighted[i],
		})),
		layerMarkersFiles: layerMarkersSources.map((file, i) => ({
			name: `${file.name}.svelte`,
			code: file.code,
			highlightedCode: layerMarkersHighlighted[i],
		})),
	};
};
