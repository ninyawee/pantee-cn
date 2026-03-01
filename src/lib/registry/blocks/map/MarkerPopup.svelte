<script lang="ts">
	import { Popup } from "svelte-maplibre-gl";
	import type { PopupOptions } from "maplibre-gl";
	import { cn } from "$lib/utils.js";
	import X from "@lucide/svelte/icons/x";

	interface Props {
		children?: import("svelte").Snippet;
		class?: string;
		closeButton?: boolean;
		offset?: PopupOptions["offset"];
		anchor?: PopupOptions["anchor"];
		closeOnClick?: boolean;
		closeOnMove?: boolean;
		focusAfterOpen?: boolean;
		maxWidth?: string;
	}

	let {
		children,
		class: className,
		closeButton = false,
		offset = 16,
		anchor,
		closeOnClick,
		closeOnMove = false,
		focusAfterOpen,
		maxWidth = "none",
	}: Props = $props();

	let open = $state(false);

	function handleClose() {
		open = false;
	}
</script>

<Popup
	bind:open
	{offset}
	{anchor}
	closeButton={false}
	{closeOnClick}
	closeOnMove={closeOnMove}
	{focusAfterOpen}
	{maxWidth}
	class="maplibre-popup-transparent"
>
	<div
		class={cn(
			"animate-in fade-in-0 zoom-in-95 bg-popover text-popover-foreground relative rounded-md border p-3 shadow-md",
			className
		)}
	>
		{#if closeButton}
			<button
				type="button"
				onclick={handleClose}
				class="ring-offset-background focus:ring-ring absolute top-1 right-1 z-10 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none"
				aria-label="Close popup"
			>
				<X class="h-4 w-4" />
				<span class="sr-only">Close</span>
			</button>
		{/if}
		{@render children?.()}
	</div>
</Popup>
