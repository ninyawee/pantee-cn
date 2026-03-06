<script lang="ts">
	import { Map, MapMarker, MarkerContent, MarkerTooltip, MapRoute } from "$lib/components/ui/map";

	const route: [number, number][] = [
		[100.5018, 13.7563], // Siam
		[100.5141, 13.7448], // Lumpini Park
		[100.5272, 13.7262], // Sathorn
		[100.5590, 13.7170], // Bang Na
	];

	const stops = [
		{ name: "Siam", lng: 100.5018, lat: 13.7563 },
		{ name: "Lumpini Park", lng: 100.5141, lat: 13.7448 },
		{ name: "Sathorn", lng: 100.5272, lat: 13.7262 },
		{ name: "Bang Na", lng: 100.5590, lat: 13.7170 },
	];
</script>

<div class="h-100 w-full">
	<Map center={[100.53, 13.735]} zoom={12.5}>
		<MapRoute coordinates={route} color="#3b82f6" width={4} opacity={0.8} />

		{#each stops as stop, index (stop.name)}
			<MapMarker longitude={stop.lng} latitude={stop.lat}>
				<MarkerContent>
					<div
						class="flex size-4.5 items-center justify-center rounded-full border-2 border-white bg-blue-500 text-xs font-bold text-white shadow-lg"
					>
						{index + 1}
					</div>
				</MarkerContent>

				<MarkerTooltip>
					{stop.name}
				</MarkerTooltip>
			</MapMarker>
		{/each}
	</Map>
</div>
