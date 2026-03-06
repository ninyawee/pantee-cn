<script lang="ts">
	import DocsLayout from "$lib/components/docs/DocsLayout.svelte";
	import DocsSection from "$lib/components/docs/DocsSection.svelte";
	import DocsCode from "$lib/components/docs/DocsCode.svelte";
	import DocsLink from "$lib/components/docs/DocsLink.svelte";
	import { ComponentPreview } from "$lib/components/docs/preview";
	import TrailPath3DExample from "$lib/components/docs/preview/examples/TrailPath3DExample.svelte";
	import { page } from "$app/state";

	const source = $derived(page.data.source);
	const highlighted = $derived(page.data.highlighted);
</script>

<svelte:head>
	<title>3D Trail Path - pantee-cn</title>
</svelte:head>

<DocsLayout
	title="3D Trail Path"
	description="A trail running route rendered in 3D terrain with animated direction indicators."
	pathname="/docs/3d-trail"
>
	<DocsSection title="Mountain Trail with Terrain">
		<p>
			Combines 3D terrain, hillshading, and an animated trail route around Khao Kho, Phetchabun
			— a popular area for trail running events in Thailand. Uses
			<DocsCode>Terrain</DocsCode>
			for elevation,
			<DocsCode>HillshadeLayer</DocsCode>
			for depth, and animated
			<DocsCode>line-dasharray</DocsCode>
			to show direction of travel. Inspired by events from
			<DocsLink href="https://www.runlah.com/th" external>RunLah</DocsLink>.
		</p>
	</DocsSection>

	<DocsSection title="Using svelte-maplibre-gl components inside Map">
		<p>
			Our <DocsCode>Map</DocsCode> component wraps
			<DocsCode>MapLibre</DocsCode> from <DocsCode>svelte-maplibre-gl</DocsCode> and passes through
			all extra props and children. This means you can use any
			<DocsCode>svelte-maplibre-gl</DocsCode> component as a direct child:
		</p>
		<ul class="text-muted-foreground ml-6 list-disc space-y-1 text-sm">
			<li><DocsCode>Terrain</DocsCode> / <DocsCode>TerrainControl</DocsCode> — 3D elevation</li>
			<li><DocsCode>Sky</DocsCode> / <DocsCode>Light</DocsCode> — atmosphere and lighting</li>
			<li><DocsCode>RasterDEMTileSource</DocsCode> — DEM tile sources for terrain and hillshade</li>
			<li><DocsCode>HillshadeLayer</DocsCode> — shaded relief visualization</li>
			<li><DocsCode>GeoJSONSource</DocsCode> — inline GeoJSON data</li>
			<li><DocsCode>LineLayer</DocsCode> / <DocsCode>FillLayer</DocsCode> / <DocsCode>CircleLayer</DocsCode> / <DocsCode>SymbolLayer</DocsCode> / <DocsCode>FillExtrusionLayer</DocsCode> — all layer types</li>
			<li><DocsCode>CustomLayer</DocsCode> — WebGL custom rendering (e.g. Three.js)</li>
			<li><DocsCode>Projection</DocsCode> / <DocsCode>GlobeControl</DocsCode> — globe projection</li>
		</ul>
		<p class="mt-2">
			Props like <DocsCode>pitch</DocsCode>, <DocsCode>bearing</DocsCode>,
			<DocsCode>maxPitch</DocsCode>, and event handlers like <DocsCode>onload</DocsCode> are all
			forwarded via <DocsCode>...rest</DocsCode> to the underlying <DocsCode>MapLibre</DocsCode>.
		</p>
	</DocsSection>

	<ComponentPreview code={source} highlightedCode={highlighted}>
		<TrailPath3DExample />
	</ComponentPreview>
</DocsLayout>
