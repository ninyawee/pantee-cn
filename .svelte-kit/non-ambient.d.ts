
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/(home)" | "/" | "/docs" | "/docs/advanced-usage" | "/docs/api-reference" | "/docs/basic-map" | "/docs/clusters" | "/docs/controls" | "/docs/installation" | "/docs/markers" | "/docs/popups" | "/docs/routes";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/(home)": Record<string, never>;
			"/": Record<string, never>;
			"/docs": Record<string, never>;
			"/docs/advanced-usage": Record<string, never>;
			"/docs/api-reference": Record<string, never>;
			"/docs/basic-map": Record<string, never>;
			"/docs/clusters": Record<string, never>;
			"/docs/controls": Record<string, never>;
			"/docs/installation": Record<string, never>;
			"/docs/markers": Record<string, never>;
			"/docs/popups": Record<string, never>;
			"/docs/routes": Record<string, never>
		};
		Pathname(): "/" | "/docs" | "/docs/advanced-usage" | "/docs/api-reference" | "/docs/basic-map" | "/docs/clusters" | "/docs/controls" | "/docs/installation" | "/docs/markers" | "/docs/popups" | "/docs/routes";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/icon.svg" | "/r/index.json" | "/r/map.json" | string & {};
	}
}