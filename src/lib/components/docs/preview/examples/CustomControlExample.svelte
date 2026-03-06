<script lang="ts">
	import { Map } from "$lib/components/ui/map";
	import { CustomControl, getMapContext } from "svelte-maplibre-gl";

	let coords = $state({ lng: 100.5018, lat: 13.7563 });
	let zoom = $state(12);
</script>

<div class="h-[400px] w-full">
	<Map
		center={[coords.lng, coords.lat]}
		{zoom}
		onmove={(e) => {
			const center = e.target.getCenter();
			coords = { lng: center.lng, lat: center.lat };
			zoom = e.target.getZoom();
		}}
	>
		<!-- Top-left: custom info panel -->
		<CustomControl position="top-left">
			<div
				class="bg-background/80 rounded-md border px-3 py-2 text-xs font-mono shadow-sm backdrop-blur-sm"
			>
				<div>lng: {coords.lng.toFixed(4)}</div>
				<div>lat: {coords.lat.toFixed(4)}</div>
				<div>zoom: {zoom.toFixed(1)}</div>
			</div>
		</CustomControl>

		<!-- Bottom-left: custom action buttons -->
		<CustomControl position="bottom-left">
			<div class="flex gap-1">
				<button
					class="bg-background hover:bg-accent rounded-md border px-2 py-1 text-xs shadow-sm"
					onclick={(e) => {
						const map = (e.target as HTMLElement).closest('.maplibregl-map');
						// Use the global approach - fly to Bangkok
						coords = { lng: 100.5018, lat: 13.7563 };
					}}
				>
					Bangkok
				</button>
				<button
					class="bg-background hover:bg-accent rounded-md border px-2 py-1 text-xs shadow-sm"
					onclick={() => {
						coords = { lng: 98.9853, lat: 18.7883 };
					}}
				>
					Chiang Mai
				</button>
			</div>
		</CustomControl>
	</Map>
</div>
