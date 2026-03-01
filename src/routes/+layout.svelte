<script lang="ts">
	import "../app.css";
	import { TooltipProvider } from "$lib/registry/ui/tooltip/index";

	let { children } = $props();
</script>

<TooltipProvider>
	{@render children()}
</TooltipProvider>
