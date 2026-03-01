<script lang="ts">
	import { getContext } from "svelte";
	import { cn } from "$lib/utils.js";

	interface Props {
		children?: import("svelte").Snippet;
		class?: string;
	}

	let { children, class: className }: Props = $props();

	const markerCtx = getContext<{
		getElement: () => HTMLDivElement | null;
	}>("pantee-marker");

	let wrapperElement: HTMLDivElement | null = $state(null);
	let movedContent: Node[] = [];

	// Move content to marker element when ready
	$effect(() => {
		const element = markerCtx?.getElement();

		if (!element || !wrapperElement) return;

		movedContent = Array.from(wrapperElement.childNodes);
		movedContent.forEach((child) => element.appendChild(child));

		return () => {
			movedContent.forEach((child) => {
				if (wrapperElement && child.parentNode === element) {
					wrapperElement.appendChild(child);
				}
			});
			movedContent = [];
		};
	});
</script>

<div bind:this={wrapperElement} style="display: contents;">
	<div class={cn("relative cursor-pointer", className)}>
		{#if children}
			{@render children()}
		{:else}
			<div class="relative h-4 w-4 rounded-full border-2 border-white bg-blue-500 shadow-lg"></div>
		{/if}
	</div>
</div>
