<script lang="ts">
	import {
		RasterDEMTileSource,
		HillshadeLayer,
		GeoJSONSource,
		CircleLayer,
		SymbolLayer,
		Terrain,
		Sky,
		Light,
		TerrainControl,
	} from "svelte-maplibre-gl";
	import { Map, MapAntRoute } from "$lib/components/ui/map";

	// Trail route along ridges and valleys near Khao Kho
	// Follows roads/paths visible on the map for realism
	const trailCoordinates: [number, number][] = [
		[100.9415, 16.6625], // Start at a village road
		[100.9402, 16.664],
		[100.9385, 16.6655], // Up along a ridge
		[100.937, 16.6668],
		[100.936, 16.6685],
		[100.9355, 16.6705], // Ridge top, turn east
		[100.9365, 16.672],
		[100.938, 16.6732],
		[100.9398, 16.6738],
		[100.9418, 16.674], // Along the ridge
		[100.9438, 16.6735],
		[100.9455, 16.6725],
		[100.9465, 16.671], // Descend into valley
		[100.947, 16.6692],
		[100.9468, 16.6675],
		[100.946, 16.666], // Valley bottom, turn back west
		[100.9445, 16.665],
		[100.943, 16.6638],
		[100.9415, 16.6625], // Back to start
	];

	const startPoint = {
		type: "Feature" as const,
		properties: { label: "Start / Finish" },
		geometry: {
			type: "Point" as const,
			coordinates: trailCoordinates[0],
		},
	};
</script>

<div class="h-[500px] w-full">
	<Map
		zoom={15}
		center={[100.9415, 16.669]}
		pitch={65}
		bearing={20}
		maxPitch={85}
	>
		<Light anchor="map" />
		<Sky
			sky-color="#001560"
			horizon-color="#0090c0"
			fog-color="#ffffff"
			sky-horizon-blend={0.5}
			horizon-fog-blend={0.7}
			fog-ground-blend={0.5}
			atmosphere-blend={0.5}
		/>
		<RasterDEMTileSource
			id="terrain"
			url="https://tiles.mapterhorn.com/tilejson.json"
		>
			<TerrainControl position="top-right" />
			<Terrain exaggeration={1.5} />
		</RasterDEMTileSource>

		<RasterDEMTileSource
			url="https://tiles.mapterhorn.com/tilejson.json"
		>
			<HillshadeLayer
				paint={{
					"hillshade-exaggeration": 0.7,
					"hillshade-illumination-anchor": "map",
					"hillshade-shadow-color": "#004050",
					"hillshade-accent-color": "#aaff00",
					"hillshade-highlight-color": "#ffffff",
				}}
			/>
		</RasterDEMTileSource>

		<MapAntRoute
			coordinates={trailCoordinates}
			color="#fbbf24"
			bgColor="#ef4444"
			width={3}
			bgWidth={5}
			bgOpacity={0.9}
			speed={0.5}
		/>

		<GeoJSONSource id="start-source" data={startPoint}>
			<CircleLayer
				id="start-circle"
				paint={{
					"circle-radius": 7,
					"circle-color": "#22c55e",
					"circle-stroke-width": 2,
					"circle-stroke-color": "#ffffff",
				}}
			/>
			<SymbolLayer
				id="start-label"
				layout={{
					"text-field": ["get", "label"],
					"text-size": 13,
					"text-offset": [0, -1.5],
					"text-font": ["Open Sans Bold"],
				}}
				paint={{
					"text-color": "#ffffff",
					"text-halo-color": "#1a1a1a",
					"text-halo-width": 1.5,
				}}
			/>
		</GeoJSONSource>
	</Map>
</div>
