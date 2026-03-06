<script lang="ts">
	import { Map, MapControls } from "$lib/components/ui/map";
</script>

<div class="h-[400px] w-full">
	<Map center={[100.5018, 13.7563]} zoom={3.5}>
		<MapControls position="bottom-right" showZoom showCompass />
	</Map>
</div>
