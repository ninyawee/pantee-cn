<script lang="ts">
	import { page } from "$app/state";
	import DocsLayout from "$lib/components/docs/DocsLayout.svelte";
	import DocsSection from "$lib/components/docs/DocsSection.svelte";
	import DocsCode from "$lib/components/docs/DocsCode.svelte";
	import { ComponentPreview } from "$lib/components/docs/preview";
	import MapControlsExample from "$lib/components/docs/preview/examples/MapControlsExample.svelte";
	import CustomControlExample from "$lib/components/docs/preview/examples/CustomControlExample.svelte";

	const controlsSource = $derived(page.data.controlsSource);
	const controlsHighlighted = $derived(page.data.controlsHighlighted);
	const customControlSource = $derived(page.data.customControlSource);
	const customControlHighlighted = $derived(page.data.customControlHighlighted);
</script>

<svelte:head>
	<title>Controls - pantee-cn</title>
</svelte:head>

<DocsLayout
	title="Controls"
	description="Add interactive controls to your map for zoom, compass, location, and fullscreen."
	pathname="/docs/controls"
>
	<DocsSection title="Built-in Controls">
		<p>
			The
			<DocsCode>MapControls</DocsCode>
			component provides a set of interactive controls that can be positioned on any corner of the map.
		</p>
	</DocsSection>

	<ComponentPreview code={controlsSource} highlightedCode={controlsHighlighted}>
		<MapControlsExample />
	</ComponentPreview>

	<DocsSection title="Custom Controls">
		<p>
			Use <DocsCode>CustomControl</DocsCode> from <DocsCode>svelte-maplibre-gl</DocsCode> to place
			any Svelte content as a map control. It positions your content in one of the four corners
			and integrates with MapLibre's control container.
		</p>
		<p class="mt-2">
			The <DocsCode>position</DocsCode> prop accepts:
			<DocsCode>top-left</DocsCode>, <DocsCode>top-right</DocsCode>,
			<DocsCode>bottom-left</DocsCode>, <DocsCode>bottom-right</DocsCode>.
			You can put any HTML, Svelte components, or interactive elements inside.
		</p>
	</DocsSection>

	<ComponentPreview code={customControlSource} highlightedCode={customControlHighlighted}>
		<CustomControlExample />
	</ComponentPreview>
</DocsLayout>
