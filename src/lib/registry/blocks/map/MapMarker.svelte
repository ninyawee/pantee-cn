<script lang="ts">
	import { Marker } from "svelte-maplibre-gl";
	import type maplibregl from "maplibre-gl";
	import { setContext } from "svelte";

	type Anchor =
		| "center"
		| "top"
		| "bottom"
		| "left"
		| "right"
		| "top-left"
		| "top-right"
		| "bottom-left"
		| "bottom-right";

	interface Props {
		longitude: number;
		latitude: number;
		children?: import("svelte").Snippet;
		onclick?: (e: MouseEvent) => void;
		onmouseenter?: (e: MouseEvent) => void;
		onmouseleave?: (e: MouseEvent) => void;
		ondragstart?: (lngLat: { lng: number; lat: number }) => void;
		ondrag?: (lngLat: { lng: number; lat: number }) => void;
		ondragend?: (lngLat: { lng: number; lat: number }) => void;
		draggable?: boolean;
		anchor?: Anchor;
		offset?: maplibregl.MarkerOptions["offset"];
		rotation?: number;
		pitchAlignment?: maplibregl.MarkerOptions["pitchAlignment"];
		rotationAlignment?: maplibregl.MarkerOptions["rotationAlignment"];
	}

	let {
		longitude = $bindable(),
		latitude = $bindable(),
		children,
		onclick,
		onmouseenter,
		onmouseleave,
		ondragstart,
		ondrag,
		ondragend,
		draggable = false,
		anchor = "center",
		offset,
		rotation,
		pitchAlignment,
		rotationAlignment,
	}: Props = $props();

	let lnglat: [number, number] = $derived([longitude, latitude]);
	let markerElement: HTMLDivElement | null = $state(null);

	// Provide context for MarkerContent DOM portal
	setContext("pantee-marker", {
		getElement: () => markerElement,
	});

	function handleClick(e: MouseEvent) {
		onclick?.(e);
	}

	function handleMouseEnter(e: MouseEvent) {
		onmouseenter?.(e);
	}

	function handleMouseLeave(e: MouseEvent) {
		onmouseleave?.(e);
	}
</script>

<Marker
	{lnglat}
	{draggable}
	{anchor}
	{offset}
	{rotation}
	{pitchAlignment}
	{rotationAlignment}
	ondrag={(e) => {
		const marker = e.target;
		const pos = marker.getLngLat();
		longitude = pos.lng;
		latitude = pos.lat;
		ondrag?.({ lng: pos.lng, lat: pos.lat });
	}}
	ondragstart={(e) => {
		const marker = e.target;
		const pos = marker.getLngLat();
		ondragstart?.({ lng: pos.lng, lat: pos.lat });
	}}
	ondragend={(e) => {
		const marker = e.target;
		const pos = marker.getLngLat();
		ondragend?.({ lng: pos.lng, lat: pos.lat });
	}}
>
	{#snippet content()}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			bind:this={markerElement}
			class="cursor-pointer"
			onclick={handleClick}
			onmouseenter={handleMouseEnter}
			onmouseleave={handleMouseLeave}
		>
		</div>
	{/snippet}
	{@render children?.()}
</Marker>
