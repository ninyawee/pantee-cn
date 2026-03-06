<script lang="ts">
	import DocsLayout from "$lib/components/docs/DocsLayout.svelte";
	import DocsSection from "$lib/components/docs/DocsSection.svelte";
	import DocsCode from "$lib/components/docs/DocsCode.svelte";
	import { ComponentPreview } from "$lib/components/docs/preview";
	import DeckGLOverlayExample from "$lib/components/docs/preview/examples/DeckGLOverlayExample.svelte";
	import { page } from "$app/state";

	const source = $derived(page.data.source);
	const highlighted = $derived(page.data.highlighted);
</script>

<svelte:head>
	<title>deck.gl Overlay - pantee-cn</title>
</svelte:head>

<DocsLayout
	title="deck.gl Overlay"
	description="Interleave deck.gl layers with MapLibre GL for advanced visualizations."
	pathname="/docs/deckgl-overlay"
>
	<DocsSection title="Animated Arc Layer">
		<p>
			Use
			<DocsCode>DeckGLOverlay</DocsCode>
			from
			<DocsCode>@svelte-maplibre-gl/deckgl</DocsCode>
			to render deck.gl layers interleaved with MapLibre GL layers. This example shows animated arcs
			over 3D extruded buildings in Tokyo.
		</p>
	</DocsSection>

	<ComponentPreview code={source} highlightedCode={highlighted}>
		<DeckGLOverlayExample />
	</ComponentPreview>
</DocsLayout>
