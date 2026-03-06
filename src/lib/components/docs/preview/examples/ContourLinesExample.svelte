<script lang="ts">
	import {
		HillshadeLayer,
		MapLibre,
		RasterDEMTileSource,
		LineLayer,
		SymbolLayer,
		TerrainControl,
	} from "svelte-maplibre-gl";
	import { MapLibreContourSource } from "@svelte-maplibre-gl/contour";
</script>

<div class="h-[400px] w-full">
	<MapLibre
		class="h-full w-full"
		style="https://demotiles.maplibre.org/styles/osm-bright-gl-style/style.json"
		zoom={12}
		minZoom={5}
		center={{ lng: 11.35, lat: 47.3 }}
	>
		<MapLibreContourSource
			url="https://tiles.mapterhorn.com/{z}/{x}/{y}.webp"
			encoding="terrarium"
			maxzoom={14}
			tileOptions={{
				thresholds: {
					5: [500, 2000],
					8: [250, 1000],
					11: [100, 500],
					12: [50, 200],
					13: [20, 100],
					14: [10, 50],
				},
				contourLayer: "contours",
				elevationKey: "ele",
				levelKey: "level",
			}}
			attribution="<a href='https://mapterhorn.com/attribution/'>Mapterhorn</a>"
		>
			{#snippet children(demSource)}
				<RasterDEMTileSource
					tiles={[demSource.sharedDemProtocolUrl]}
					maxzoom={14}
					tileSize={256}
				>
					<TerrainControl />
				</RasterDEMTileSource>
				<RasterDEMTileSource
					tiles={[demSource.sharedDemProtocolUrl]}
					maxzoom={14}
					tileSize={256}
				>
					<HillshadeLayer
						paint={{
							"hillshade-exaggeration": 0.5,
							"hillshade-illumination-anchor": "map",
							"hillshade-shadow-color": "#3080b0",
						}}
					/>
				</RasterDEMTileSource>
				<LineLayer
					sourceLayer="contours"
					paint={{
						"line-color": "rgba(90, 20, 0, 1)",
						"line-width": ["match", ["get", "level"], 1, 1.5, 0.5],
					}}
				/>
				<SymbolLayer
					sourceLayer="contours"
					filter={[">", ["get", "level"], 0]}
					layout={{
						"symbol-placement": "line",
						"text-size": 12,
						"text-field": ["number-format", ["get", "ele"], {}],
					}}
					paint={{
						"text-halo-color": "white",
						"text-halo-width": 1,
					}}
				/>
			{/snippet}
		</MapLibreContourSource>
	</MapLibre>
</div>
