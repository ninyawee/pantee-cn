<script lang="ts">
	import DocsLayout from "$lib/components/docs/DocsLayout.svelte";
	import DocsSection from "$lib/components/docs/DocsSection.svelte";
	import DocsCode from "$lib/components/docs/DocsCode.svelte";
	import { ComponentPreview } from "$lib/components/docs/preview";
	import AntPathExample from "$lib/components/docs/preview/examples/AntPathExample.svelte";
	import { page } from "$app/state";

	const source = $derived(page.data.source);
	const highlighted = $derived(page.data.highlighted);
</script>

<svelte:head>
	<title>Ant Path Animation - pantee-cn</title>
</svelte:head>

<DocsLayout
	title="Ant Path Animation"
	description="Animated marching ants line effect to indicate direction along a route."
	pathname="/docs/ant-path"
>
	<DocsSection title="Animated Dash Pattern">
		<p>
			The ant path effect is created by cycling through a sequence of
			<DocsCode>line-dasharray</DocsCode>
			values on each animation frame. A background line provides contrast while the foreground dashes
			march along the route to indicate direction of travel. Adapted from DMCR Patrol path visualization.
		</p>
	</DocsSection>

	<ComponentPreview code={source} highlightedCode={highlighted}>
		<AntPathExample />
	</ComponentPreview>
</DocsLayout>
