<script lang="ts">
	import { MapLibre, GeoJSONSource, LineLayer } from "svelte-maplibre-gl";
	import { onMount } from "svelte";

	// Ant path dash-array animation sequence
	// Each frame shifts the dash pattern to create a marching ants effect
	const DASH_ARRAY_SEQUENCE = [
		[0, 4, 3],
		[0.5, 4, 2.5],
		[1, 4, 2],
		[1.5, 4, 1.5],
		[2, 4, 1],
		[2.5, 4, 0.5],
		[3, 4, 0],
		[0, 0.5, 3, 3.5],
		[0, 1, 3, 3],
		[0, 1.5, 3, 2.5],
		[0, 2, 3, 2],
		[0, 2.5, 3, 1.5],
		[0, 3, 3, 1],
		[0, 3.5, 3, 0.5],
	];

	// Sample route coordinates (Bangkok to Chiang Mai)
	const routeCoordinates: [number, number][] = [
		[100.5018, 13.7563],
		[100.4, 14.2],
		[100.1, 14.8],
		[99.8, 15.5],
		[99.5, 16.1],
		[99.2, 16.7],
		[99.0, 17.3],
		[98.95, 17.8],
		[98.98, 18.5],
		[98.9853, 18.7883],
	];

	const routeData = {
		type: "Feature" as const,
		properties: {},
		geometry: {
			type: "LineString" as const,
			coordinates: routeCoordinates,
		},
	};

	let map: import("maplibre-gl").Map | undefined = $state();
	let step = 0;
	let frameId: number | null = null;
	let lastTime = 0;
	const FPS_INTERVAL = 1000 / 18; // ~18fps for smooth but performant animation

	function animate(time: number) {
		if (!map) return;

		if (time - lastTime >= FPS_INTERVAL) {
			lastTime = time;
			const dashArray = DASH_ARRAY_SEQUENCE[step % DASH_ARRAY_SEQUENCE.length];
			map.setPaintProperty("ant-path-layer", "line-dasharray", dashArray);
			step++;
		}

		frameId = requestAnimationFrame(animate);
	}

	function handleMapLoad() {
		frameId = requestAnimationFrame(animate);
	}

	onMount(() => {
		return () => {
			if (frameId !== null) cancelAnimationFrame(frameId);
		};
	});
</script>

<div class="h-[400px] w-full">
	<MapLibre
		bind:map
		class="h-full w-full"
		style="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
		zoom={5.5}
		center={[99.7, 16.2]}
		onload={handleMapLoad}
	>
		<GeoJSONSource id="ant-path-source" data={routeData}>
			<!-- Background line -->
			<LineLayer
				id="ant-path-bg-layer"
				layout={{ "line-join": "round", "line-cap": "round" }}
				paint={{
					"line-color": "#ffffff",
					"line-width": 6,
					"line-opacity": 0.4,
				}}
			/>
			<!-- Animated ant path (butt cap avoids dots from zero-length dash segments) -->
			<LineLayer
				id="ant-path-layer"
				layout={{ "line-join": "round", "line-cap": "butt" }}
				paint={{
					"line-color": "#2563eb",
					"line-width": 3,
					"line-opacity": 1,
					"line-dasharray": DASH_ARRAY_SEQUENCE[0],
				}}
			/>
		</GeoJSONSource>
	</MapLibre>
</div>
