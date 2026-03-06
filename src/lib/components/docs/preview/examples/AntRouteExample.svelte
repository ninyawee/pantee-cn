<script lang="ts">
	import { Map, MapAntRoute, MapMarker } from "$lib/components/ui/map";
	import { Button } from "$lib/registry/ui/button";
	import { CustomControl } from "svelte-maplibre-gl";
	import Play from "@lucide/svelte/icons/play";
	import Pause from "@lucide/svelte/icons/pause";

	let paused = $state(false);

	// Bangkok to Chiang Mai
	const chiangMaiRoute: [number, number][] = [
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

	// Bangkok to Khon Kaen
	const khonKaenRoute: [number, number][] = [
		[100.5018, 13.7563],
		[100.8, 14.2],
		[101.2, 14.8],
		[101.8, 15.4],
		[102.2, 15.9],
		[102.83, 16.43],
	];

	// Calculate bearing for arrow rotation from last segment
	function bearing(from: [number, number], to: [number, number]): number {
		const [lng1, lat1] = from.map((d) => (d * Math.PI) / 180);
		const [lng2, lat2] = to.map((d) => (d * Math.PI) / 180);
		const dLng = lng2 - lng1;
		const y = Math.sin(dLng) * Math.cos(lat2);
		const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);
		return ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
	}

	const lastSeg = khonKaenRoute.slice(-2);
	const arrowRotation = bearing(lastSeg[0], lastSeg[1]);
	const [arrowLng, arrowLat] = khonKaenRoute[khonKaenRoute.length - 1];
</script>

<div class="h-[400px] w-full">
	<Map zoom={5.5} center={[100.5, 16.0]}>
		<MapAntRoute coordinates={chiangMaiRoute} {paused} />
		<MapAntRoute coordinates={khonKaenRoute} color="#eab308" bgColor="#000000" {paused} />
		<CustomControl position="top-left">
			<Button variant="outline" size="icon-sm" class="!inline-flex" onclick={() => (paused = !paused)}>
				{#if paused}
					<Play class="size-4" />
				{:else}
					<Pause class="size-4" />
				{/if}
			</Button>
		</CustomControl>
		<MapMarker longitude={arrowLng} latitude={arrowLat} rotation={arrowRotation} anchor="bottom">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
				<path d="M12 2L4 20h16L12 2z" fill="#eab308" stroke="#000" stroke-width="1.5" />
			</svg>
		</MapMarker>
	</Map>
</div>
