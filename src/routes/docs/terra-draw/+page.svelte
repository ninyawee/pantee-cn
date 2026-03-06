<script lang="ts">
	import DocsLayout from "$lib/components/docs/DocsLayout.svelte";
	import DocsSection from "$lib/components/docs/DocsSection.svelte";
	import DocsCode from "$lib/components/docs/DocsCode.svelte";
	import { ComponentPreview } from "$lib/components/docs/preview";
	import TerraDrawExample from "$lib/components/docs/preview/examples/TerraDrawExample.svelte";
	import { page } from "$app/state";

	const source = $derived(page.data.source);
	const highlighted = $derived(page.data.highlighted);
</script>

<svelte:head>
	<title>Terra Draw - pantee-cn</title>
</svelte:head>

<DocsLayout
	title="Terra Draw"
	description="Draw and edit geometries on the map with Terra Draw integration."
	pathname="/docs/terra-draw"
>
	<DocsSection title="Drawing Tools">
		<p>
			Use
			<DocsCode>TerraDraw</DocsCode>
			from
			<DocsCode>@svelte-maplibre-gl/terradraw</DocsCode>
			to add drawing capabilities to the map. Supports points, lines, polygons, circles, sectors,
			rectangles, freehand drawing, and selection with drag/edit.
		</p>
	</DocsSection>

	<ComponentPreview code={source} highlightedCode={highlighted}>
		<TerraDrawExample />
	</ComponentPreview>
</DocsLayout>
