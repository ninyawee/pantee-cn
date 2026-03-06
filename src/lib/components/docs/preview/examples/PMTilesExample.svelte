<script lang="ts">
	import { MapLibre } from "svelte-maplibre-gl";
	import { PMTilesProtocol } from "@svelte-maplibre-gl/pmtiles";
	import type { LayerSpecification } from "maplibre-gl";

	let layers: LayerSpecification[] = $state.raw([]);

	$effect(() => {
		fetch("https://tile.openstreetmap.jp/styles/openmaptiles/style.json")
			.then((response) => response.json())
			.then((data) => {
				layers = data["layers"].filter(
					(layer: LayerSpecification) =>
						!("source" in layer) || layer.source === "openmaptiles"
				);
			});
	});
</script>

<PMTilesProtocol />

<div class="h-[400px] w-full">
	<MapLibre
		class="h-full w-full"
		zoom={10}
		center={[12.484, 41.896]}
		style={{
			version: 8,
			glyphs: "https://tile.openstreetmap.jp/fonts/{fontstack}/{range}.pbf",
			sprite: "https://tile.openstreetmap.jp/styles/openmaptiles/sprite",
			sources: {
				openmaptiles: {
					type: "vector",
					url: "pmtiles://https://tile.openstreetmap.jp/static/planet.pmtiles",
					attribution: "OSM Japan © OpenMapTiles © OpenStreetMap contributors",
				},
			},
			layers,
		}}
	></MapLibre>
</div>
