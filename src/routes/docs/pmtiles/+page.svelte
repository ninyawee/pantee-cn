<script lang="ts">
	import DocsLayout from "$lib/components/docs/DocsLayout.svelte";
	import DocsSection from "$lib/components/docs/DocsSection.svelte";
	import DocsCode from "$lib/components/docs/DocsCode.svelte";
	import { ComponentPreview } from "$lib/components/docs/preview";
	import PMTilesExample from "$lib/components/docs/preview/examples/PMTilesExample.svelte";
	import { page } from "$app/state";

	const source = $derived(page.data.source);
	const highlighted = $derived(page.data.highlighted);
</script>

<svelte:head>
	<title>PMTiles Protocol - pantee-cn</title>
</svelte:head>

<DocsLayout
	title="PMTiles Protocol"
	description="Load vector tiles from PMTiles archives using the pmtiles:// protocol."
	pathname="/docs/pmtiles"
>
	<DocsSection title="PMTiles Source">
		<p>
			Use the
			<DocsCode>PMTilesProtocol</DocsCode>
			component from
			<DocsCode>@svelte-maplibre-gl/pmtiles</DocsCode>
			to enable the
			<DocsCode>pmtiles://</DocsCode>
			protocol globally. This allows loading vector tiles directly from PMTiles archives.
		</p>
	</DocsSection>

	<ComponentPreview code={source} highlightedCode={highlighted}>
		<PMTilesExample />
	</ComponentPreview>
</DocsLayout>
