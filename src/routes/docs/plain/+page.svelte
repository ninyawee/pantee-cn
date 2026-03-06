<script lang="ts">
	import DocsLayout from "$lib/components/docs/DocsLayout.svelte";
	import DocsSection from "$lib/components/docs/DocsSection.svelte";
	import DocsCode from "$lib/components/docs/DocsCode.svelte";
	import { ComponentPreview } from "$lib/components/docs/preview";
	import PlainMapExample from "$lib/components/docs/preview/examples/PlainMapExample.svelte";
	import { page } from "$app/state";

	const plainMapSource = $derived(page.data.plainMapSource);
	const plainMapHighlighted = $derived(page.data.plainMapHighlighted);
</script>

<svelte:head>
	<title>Plain Map - pantee-cn</title>
</svelte:head>

<DocsLayout
	title="Plain Map"
	description="A minimal example showing only the base map with basic controls."
	pathname="/docs/plain"
>
	<DocsSection title="Minimal Map">
		<p>
			The simplest possible map using the
			<DocsCode>Map</DocsCode>
			component with zoom and compass controls. This is a recreation of the
			<DocsCode>svelte-maplibre-gl</DocsCode>
			plain example, adapted to use our component library.
		</p>
	</DocsSection>

	<ComponentPreview code={plainMapSource} highlightedCode={plainMapHighlighted}>
		<PlainMapExample />
	</ComponentPreview>
</DocsLayout>
