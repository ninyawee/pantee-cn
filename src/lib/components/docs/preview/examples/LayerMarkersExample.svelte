<script lang="ts">
	import { Map, MapPopup } from "$lib/components/ui/map";
	import LayerMarkersContent from "./LayerMarkersContent.svelte";

	// Generate random points around NYC
	function generateRandomPoints(count: number) {
		const center = { lng: -73.98, lat: 40.75 };
		const features = [];

		for (let i = 0; i < count; i++) {
			const lng = center.lng + (Math.random() - 0.5) * 0.15;
			const lat = center.lat + (Math.random() - 0.5) * 0.1;
			features.push({
				type: "Feature" as const,
				properties: {
					id: i,
					name: `Location ${i + 1}`,
					category: ["Restaurant", "Cafe", "Bar", "Shop"][Math.floor(Math.random() * 4)],
				},
				geometry: {
					type: "Point" as const,
					coordinates: [lng, lat],
				},
			});
		}

		return {
			type: "FeatureCollection" as const,
			features,
		};
	}

	// 200 markers - would be slow with DOM markers, but fast with layers
	const pointsData = generateRandomPoints(200);

	interface SelectedPoint {
		id: number;
		name: string;
		category: string;
		coordinates: [number, number];
	}

	let selectedPoint: SelectedPoint | null = $state(null);
</script>

<div class="h-[400px] w-full">
	<Map center={[-73.98, 40.75]} zoom={11}>
		<LayerMarkersContent {pointsData} onselect={(point) => (selectedPoint = point)} />

		{#if selectedPoint}
			<MapPopup
				longitude={selectedPoint.coordinates[0]}
				latitude={selectedPoint.coordinates[1]}
				onclose={() => (selectedPoint = null)}
				closeOnClick={false}
				focusAfterOpen={false}
				offset={10}
				closeButton
			>
				<div class="min-w-[140px]">
					<p class="font-medium">{selectedPoint.name}</p>
					<p class="text-muted-foreground text-sm">{selectedPoint.category}</p>
				</div>
			</MapPopup>
		{/if}
	</Map>
</div>
