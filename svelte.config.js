import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: "200.html",
		}),
		paths: {
			base: process.env.BASE_PATH ?? "",
		},
		prerender: {
			entries: ["*"],
			handleMissingId: "warn",
			handleHttpError: "warn",
		},
	},
	vitePlugin: {
		inspector: {
			toggleKeyCombo: "meta-shift",
			showToggleButton: "always",
			toggleButtonPos: "bottom-right",
		},
	},
};

export default config;
