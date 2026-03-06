<script lang="ts">
	import DocsLayout from "$lib/components/docs/DocsLayout.svelte";
	import DocsSection from "$lib/components/docs/DocsSection.svelte";
	import DocsCode from "$lib/components/docs/DocsCode.svelte";
	import { ComponentPreview } from "$lib/components/docs/preview";
	import ContourLinesExample from "$lib/components/docs/preview/examples/ContourLinesExample.svelte";
	import { page } from "$app/state";

	const source = $derived(page.data.source);
	const highlighted = $derived(page.data.highlighted);
</script>

<svelte:head>
	<title>Contour Lines - pantee-cn</title>
</svelte:head>

<DocsLayout
	title="Contour Lines"
	description="Render elevation contours with hillshading and terrain from raster DEM tiles."
	pathname="/docs/contour-lines"
>
	<DocsSection title="Elevation Contours">
		<p>
			Use
			<DocsCode>MapLibreContourSource</DocsCode>
			from
			<DocsCode>@svelte-maplibre-gl/contour</DocsCode>
			to generate contour lines from raster DEM tiles. Combined with hillshading and terrain control
			for a full topographic map experience.
		</p>
	</DocsSection>

	<ComponentPreview code={source} highlightedCode={highlighted}>
		<ContourLinesExample />
	</ComponentPreview>
</DocsLayout>
