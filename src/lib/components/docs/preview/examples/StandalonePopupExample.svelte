<script lang="ts">
	import { Map, MapPopup } from "$lib/components/ui/map";
	import { Button } from "$lib/registry/ui/button";

	let showPopup = $state(true);
</script>

<div class="relative h-[400px] w-full">
	<Map center={[100.5018, 13.7563]} zoom={13}>
		{#if showPopup}
			<MapPopup
				longitude={100.5018}
				latitude={13.7563}
				closeButton
				focusAfterOpen={false}
				closeOnClick={false}
				onclose={() => (showPopup = false)}
				class="w-62"
			>
				<div class="space-y-2">
					<h3 class="text-foreground font-semibold">Bangkok</h3>
					<p class="text-muted-foreground text-sm">
						The City of Angels. Population: 10.7 million
					</p>
					<Button size="sm" variant="outline" class="w-full" onclick={() => (showPopup = false)}>
						Close
					</Button>
				</div>
			</MapPopup>
		{/if}
	</Map>

	{#if !showPopup}
		<Button size="sm" class="absolute bottom-4 left-4 z-10" onclick={() => (showPopup = true)}>
			Show Popup
		</Button>
	{/if}
</div>
