<script lang="ts">
	import DocsLayout from "$lib/components/docs/DocsLayout.svelte";
	import DocsSection from "$lib/components/docs/DocsSection.svelte";
	import DocsCode from "$lib/components/docs/DocsCode.svelte";
	import DocsLink from "$lib/components/docs/DocsLink.svelte";
	import { ComponentPreview } from "$lib/components/docs/preview";
	import RouteExample from "$lib/components/docs/preview/examples/RouteExample.svelte";
	import OsrmRouteExample from "$lib/components/docs/preview/examples/OsrmRouteExample.svelte";
	import AntRouteExample from "$lib/components/docs/preview/examples/AntRouteExample.svelte";
	import { page } from "$app/state";

	const routeSource = $derived(page.data.routeSource);
	const routeHighlighted = $derived(page.data.routeHighlighted);
	const osrmRouteSource = $derived(page.data.osrmRouteSource);
	const osrmRouteHighlighted = $derived(page.data.osrmRouteHighlighted);
	const antRouteSource = $derived(page.data.antRouteSource);
	const antRouteHighlighted = $derived(page.data.antRouteHighlighted);
</script>

<svelte:head>
	<title>Routes - pantee-cn</title>
</svelte:head>

<DocsLayout
	title="Routes"
	description="Draw lines and paths connecting coordinates on the map."
	pathname="/docs/routes"
>
	<DocsSection>
		<p>
			Use
			<DocsCode>MapRoute</DocsCode>
			to draw lines connecting a series of coordinates. Perfect for showing directions, trails, or any
			path between points.
		</p>
	</DocsSection>

	<DocsSection title="Basic Route">
		<p>Draw a route with numbered stop markers along the path.</p>
	</DocsSection>

	<ComponentPreview code={routeSource} highlightedCode={routeHighlighted}>
		<RouteExample />
	</ComponentPreview>

	<DocsSection title="Route Planning">
		<p>
			Display multiple route options and let users select between them. This example fetches real
			driving directions from the <DocsLink href="https://project-osrm.org/" external>
				OSRM API
			</DocsLink>. Click on a route or use the buttons to switch.
		</p>
	</DocsSection>

	<ComponentPreview code={osrmRouteSource} highlightedCode={osrmRouteHighlighted} class="h-125">
		<OsrmRouteExample />
	</ComponentPreview>

	<DocsSection title="Animated Ant Route">
		<p>
			Use <DocsCode>MapAntRoute</DocsCode> to draw animated "marching ants" paths. The animation
			cycles through <DocsCode>line-dasharray</DocsCode> frames using
			<DocsCode>requestAnimationFrame</DocsCode> for smooth motion.
		</p>
		<p class="mt-2">
			Props: <DocsCode>coordinates</DocsCode> (required),
			<DocsCode>color</DocsCode>, <DocsCode>bgColor</DocsCode>,
			<DocsCode>width</DocsCode>, <DocsCode>bgWidth</DocsCode>,
			<DocsCode>speed</DocsCode> (0–1 scale),
			<DocsCode>dashLength</DocsCode>, <DocsCode>gapLength</DocsCode>,
			<DocsCode>paused</DocsCode>.
		</p>
	</DocsSection>

	<ComponentPreview code={antRouteSource} highlightedCode={antRouteHighlighted}>
		<AntRouteExample />
	</ComponentPreview>
</DocsLayout>
