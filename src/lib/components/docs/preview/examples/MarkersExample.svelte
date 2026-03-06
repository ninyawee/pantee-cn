<script lang="ts">
	import {
		Map,
		MapMarker,
		MarkerContent,
		MarkerPopup,
		MarkerTooltip,
	} from "$lib/components/ui/map";

	const locations = [
		{
			id: 1,
			name: "Grand Palace",
			lng: 100.4914,
			lat: 13.7500,
		},
		{
			id: 2,
			name: "Wat Arun",
			lng: 100.4889,
			lat: 13.7437,
		},
		{
			id: 3,
			name: "Wat Pho",
			lng: 100.4933,
			lat: 13.7465,
		},
	];
</script>

<div class="h-[400px] w-full">
	<Map center={[100.491, 13.747]} zoom={15}>
		{#each locations as location (location.id)}
			<MapMarker longitude={location.lng} latitude={location.lat}>
				<MarkerContent>
					<div class="bg-primary size-4 rounded-full border-2 border-white shadow-lg"></div>
				</MarkerContent>

				<MarkerTooltip>
					{location.name}
				</MarkerTooltip>

				<MarkerPopup>
					<div class="space-y-1">
						<p class="text-foreground font-medium">
							{location.name}
						</p>
						<p class="text-muted-foreground text-xs">
							{location.lat.toFixed(4)}, {location.lng.toFixed(4)}
						</p>
					</div>
				</MarkerPopup>
			</MapMarker>
		{/each}
	</Map>
</div>
