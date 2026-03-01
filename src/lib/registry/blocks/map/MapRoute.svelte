<script lang="ts">
	import { GeoJSONSource, LineLayer } from "svelte-maplibre-gl";

	interface Props {
		id?: string;
		coordinates: [number, number][];
		color?: string;
		width?: number;
		opacity?: number;
		dashArray?: [number, number];
		onclick?: () => void;
		onmouseenter?: () => void;
		onmouseleave?: () => void;
		interactive?: boolean;
	}

	let {
		coordinates,
		color = "#4285F4",
		width = 3,
		opacity = 0.8,
		dashArray,
		onclick,
		onmouseenter,
		onmouseleave,
		interactive = true,
		id = crypto.randomUUID(),
	}: Props = $props();

	const data = $derived({
		type: "Feature" as const,
		properties: {},
		geometry: {
			type: "LineString" as const,
			coordinates,
		},
	});

	const paint = $derived({
		"line-color": color,
		"line-width": width,
		"line-opacity": opacity,
		"line-color-transition": { duration: 300, delay: 0 },
		"line-width-transition": { duration: 300, delay: 0 },
		"line-opacity-transition": { duration: 300, delay: 0 },
		...(dashArray ? { "line-dasharray": dashArray } : {}),
	});
</script>

{#if coordinates.length >= 2}
	<GeoJSONSource id={`route-source-${id}`} {data}>
		<LineLayer
			id={`route-layer-${id}`}
			layout={{
				"line-join": "round",
				"line-cap": "round",
			}}
			{paint}
			onclick={interactive && onclick ? () => onclick?.() : undefined}
			onmouseenter={interactive
				? (e) => {
						e.target.getCanvas().style.cursor = "pointer";
						onmouseenter?.();
					}
				: undefined}
			onmouseleave={interactive
				? (e) => {
						e.target.getCanvas().style.cursor = "";
						onmouseleave?.();
					}
				: undefined}
		/>
	</GeoJSONSource>
{/if}
