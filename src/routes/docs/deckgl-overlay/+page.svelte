<script lang="ts">
	import DocsLayout from "$lib/components/docs/DocsLayout.svelte";
	import DocsSection from "$lib/components/docs/DocsSection.svelte";
	import DocsCode from "$lib/components/docs/DocsCode.svelte";
	import { ComponentPreview } from "$lib/components/docs/preview";
	import DeckGLOverlayExample from "$lib/components/docs/preview/examples/DeckGLOverlayExample.svelte";
	import DeckGLAccidentExample from "$lib/components/docs/preview/examples/DeckGLAccidentExample.svelte";
	import { page } from "$app/state";

	const sources = $derived(page.data.sources);
	const highlighteds = $derived(page.data.highlighteds);
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
			over 3D extruded buildings in Bangkok.
		</p>
	</DocsSection>

	<ComponentPreview code={sources.arc} highlightedCode={highlighteds.arc}>
		<DeckGLOverlayExample />
	</ComponentPreview>

	<DocsSection title="Road Accident Visualization">
		<p>
			A <DocsCode>ScatterplotLayer</DocsCode> showing 2022 road accident data from the
			<a
				href="https://gdcatalog.go.th/dataset/gdpublish-arms-accident"
				target="_blank"
				rel="noopener noreferrer"
				class="text-primary underline hover:no-underline">Department of Rural Roads (ทช.)</a
			>. Point size and color indicate severity: red for fatalities, orange for severe injuries,
			yellow for minor injuries. Hover to see details.
		</p>
	</DocsSection>

	<ComponentPreview code={sources.accident} highlightedCode={highlighteds.accident}>
		<DeckGLAccidentExample />
	</ComponentPreview>
</DocsLayout>
