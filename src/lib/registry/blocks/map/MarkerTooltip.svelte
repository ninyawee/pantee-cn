<script lang="ts">
	import { Popup, getMarkerContext } from "svelte-maplibre-gl";
	import type { PopupOptions } from "maplibre-gl";
	import { cn } from "$lib/utils.js";

	interface Props {
		children?: import("svelte").Snippet;
		class?: string;
		offset?: PopupOptions["offset"];
		anchor?: PopupOptions["anchor"];
	}

	let { children, class: className, offset = 16, anchor }: Props = $props();

	let open = $state(false);

	const markerCtx = getMarkerContext();

	// Watch for hover on the marker element
	$effect(() => {
		const marker = markerCtx?.marker;
		if (!marker) return;

		const el = marker.getElement();
		if (!el) return;

		const handleMouseEnter = () => {
			open = true;
		};
		const handleMouseLeave = () => {
			open = false;
		};

		el.addEventListener("mouseenter", handleMouseEnter);
		el.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			el.removeEventListener("mouseenter", handleMouseEnter);
			el.removeEventListener("mouseleave", handleMouseLeave);
		};
	});
</script>

<Popup
	bind:open
	{offset}
	{anchor}
	closeButton={false}
	closeOnClick={true}
	maxWidth="none"
	class="maplibre-popup-transparent"
>
	<div
		class={cn(
			"animate-in fade-in-0 zoom-in-95 bg-foreground text-background rounded-md px-2 py-1 text-xs shadow-md",
			className
		)}
	>
		{@render children?.()}
	</div>
</Popup>
