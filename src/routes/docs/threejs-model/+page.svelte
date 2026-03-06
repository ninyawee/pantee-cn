<script lang="ts">
	import DocsLayout from "$lib/components/docs/DocsLayout.svelte";
	import DocsSection from "$lib/components/docs/DocsSection.svelte";
	import DocsCode from "$lib/components/docs/DocsCode.svelte";
	import { ComponentPreview } from "$lib/components/docs/preview";
	import ThreeJsModelExample from "$lib/components/docs/preview/examples/ThreeJsModelExample.svelte";
	import { page } from "$app/state";

	const source = $derived(page.data.source);
	const highlighted = $derived(page.data.highlighted);
</script>

<svelte:head>
	<title>3D Model with Three.js - pantee-cn</title>
</svelte:head>

<DocsLayout
	title="3D Model with Three.js"
	description="Render a 3D model on the map using Three.js and a custom layer."
	pathname="/docs/threejs-model"
>
	<DocsSection title="Three.js Custom Layer">
		<p>
			This example integrates a Three.js 3D model into the map using
			<DocsCode>CustomLayer</DocsCode>
			from
			<DocsCode>svelte-maplibre-gl</DocsCode>. The model is loaded via
			<DocsCode>GLTFLoader</DocsCode>
			and rendered in 3D space aligned with the map's projection.
		</p>
	</DocsSection>

	<ComponentPreview code={source} highlightedCode={highlighted}>
		<ThreeJsModelExample />
	</ComponentPreview>
</DocsLayout>
