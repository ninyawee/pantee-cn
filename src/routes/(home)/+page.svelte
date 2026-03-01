<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import ExamplesGrid from "$lib/components/home/ExamplesGrid.svelte";
	import Hero from "$lib/components/Hero.svelte";
</script>

<svelte:head>
	<title>pantee-cn - Beautiful maps made simple</title>
</svelte:head>

<div class="flex flex-col">
	<Header />

	<main class="flex-1 pb-32">
		<section class="relative w-full py-20">
			<Hero />
		</section>

		<section class="container px-6">
			<ExamplesGrid />
		</section>
	</main>

	<section id="what" class="container px-6 pb-20">
		<div class="mx-auto max-w-3xl space-y-6 text-center">
			<h2 class="animate-fade-up text-foreground text-2xl font-bold">What is pantee-cn?</h2>
			<p class="animate-fade-up text-muted-foreground text-sm leading-relaxed delay-100">
				<span class="text-foreground font-medium">pantee</span> (แผนที่) is the Thai word for
				"map", and <span class="text-foreground font-medium">cn</span> stands for components
				&mdash; following the
				<a
					href="https://ui.shadcn.com"
					target="_blank"
					rel="noopener noreferrer"
					class="underline underline-offset-4 hover:text-foreground">shadcn</a
				> naming convention.
			</p>
			<div class="animate-fade-up mx-auto grid max-w-2xl gap-4 text-left text-sm delay-200 sm:grid-cols-2">
				<div class="bg-card border-border rounded-lg border p-4">
					<h3 class="text-foreground mb-1 font-semibold">Copy &amp; paste, not install</h3>
					<p class="text-muted-foreground leading-relaxed">
						You own the code. Copy map components into your project and customize freely &mdash; no
						black-box dependency.
					</p>
				</div>
				<div class="bg-card border-border rounded-lg border p-4 sm:col-span-2">
					<h3 class="text-foreground mb-1 font-semibold">Built on solid foundations</h3>
					<p class="text-muted-foreground leading-relaxed">
						Powered by
						<a
							href="https://github.com/MIERUNE/svelte-maplibre-gl"
							target="_blank"
							rel="noopener noreferrer"
							class="underline underline-offset-4 hover:text-foreground">MIERUNE's svelte-maplibre-gl</a
						>, styled with Tailwind, and designed to work seamlessly with
						<a
							href="https://shadcn-svelte.com"
							target="_blank"
							rel="noopener noreferrer"
							class="underline underline-offset-4 hover:text-foreground">shadcn-svelte</a
						>.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="why" class="container px-6 pb-16">
		<div class="mx-auto max-w-3xl space-y-8">
			<div class="space-y-3 text-center">
				<h2 class="text-foreground text-2xl font-bold">Why pantee-cn?</h2>
				<p class="text-muted-foreground text-sm leading-relaxed">
					<a
						href="https://github.com/AnmolSaini16/mapcn"
						target="_blank"
						rel="noopener noreferrer"
						class="underline underline-offset-4 hover:text-foreground">mapcn</a
					>
					and
					<a
						href="https://github.com/MariusLang/mapcn-svelte"
						target="_blank"
						rel="noopener noreferrer"
						class="underline underline-offset-4 hover:text-foreground">mapcn-svelte</a
					>
					are great starting points &mdash; but we found real issues that needed fixing and
					patterns that could be better. Here's what
					<span class="text-foreground font-medium">pantee-cn</span> improves:
				</p>
			</div>

			<div class="grid gap-6 sm:grid-cols-2">
				<div class="bg-card border-border rounded-lg border p-5">
					<div class="mb-3 flex items-center gap-2">
						<span
							class="inline-flex items-center rounded-full bg-red-500/10 px-2 py-0.5 text-xs font-medium text-red-500"
							>P0</span
						>
						<h3 class="text-foreground text-sm font-semibold">Bugs to Fix</h3>
					</div>
					<ul class="text-muted-foreground space-y-2 text-sm leading-relaxed">
						<li>Cluster color/threshold changes are silently ignored</li>
						<li>Route initial paint flashes hardcoded gray instead of actual props</li>
					</ul>
				</div>

				<div class="bg-card border-border rounded-lg border p-5">
					<div class="mb-3 flex items-center gap-2">
						<span
							class="inline-flex items-center rounded-full bg-orange-500/10 px-2 py-0.5 text-xs font-medium text-orange-500"
							>P1</span
						>
						<h3 class="text-foreground text-sm font-semibold">Svelte 5 Best Practices</h3>
					</div>
					<ul class="text-muted-foreground space-y-2 text-sm leading-relaxed">
						<li>
							Use <code class="text-foreground/80 text-xs">$state.raw()</code> for MapLibre instances
							&mdash; prevents proxy wrapping of non-POJO objects
						</li>
						<li>
							Use <code class="text-foreground/80 text-xs">$state.snapshot()</code> before passing state
							to MapLibre APIs
						</li>
						<li>Typed context module instead of string-keyed context</li>
						<li>
							<code class="text-foreground/80 text-xs">transformStyle</code> + queue pattern instead of
							100ms timeout race conditions
						</li>
					</ul>
				</div>

				<div class="bg-card border-border rounded-lg border p-5">
					<div class="mb-3 flex items-center gap-2">
						<span
							class="inline-flex items-center rounded-full bg-yellow-500/10 px-2 py-0.5 text-xs font-medium text-yellow-500"
							>P2</span
						>
						<h3 class="text-foreground text-sm font-semibold">API Improvements</h3>
					</div>
					<ul class="text-muted-foreground space-y-2 text-sm leading-relaxed">
						<li>
							<code class="text-foreground/80 text-xs">$bindable()</code> viewport props for two-way
							binding
						</li>
						<li>Pass map instance into children snippet</li>
						<li>
							<code class="text-foreground/80 text-xs">resetEventListener()</code> utility to DRY up cleanup
						</li>
						<li>Consistent skip-first-run sentinel pattern</li>
					</ul>
				</div>

				<div class="bg-card border-border rounded-lg border p-5">
					<div class="mb-3 flex items-center gap-2">
						<span
							class="inline-flex items-center rounded-full bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-500"
							>P3</span
						>
						<h3 class="text-foreground text-sm font-semibold">Coverage Expansion</h3>
					</div>
					<ul class="text-muted-foreground space-y-2 text-sm leading-relaxed">
						<li>Composable source/layer primitives alongside presets</li>
						<li>Native MapLibre control wrappers</li>
						<li>Feature query utilities</li>
						<li>External map access pattern</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<Footer />
</div>
