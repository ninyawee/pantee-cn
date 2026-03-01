import { getMapContext } from "svelte-maplibre-gl";

export function useMap() {
	const context = getMapContext();
	const map = $derived(context.map);
	const isLoaded = $derived(!!context.map);

	return {
		get map() {
			return map;
		},
		get isLoaded() {
			return isLoaded;
		},
		get context() {
			return context;
		},
	};
}
