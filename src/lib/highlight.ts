import { createHighlighter, type Highlighter } from "shiki";

let highlighter: Highlighter | null = null;

export async function highlightCode(code: string, lang: string = "svelte"): Promise<string> {
	if (!highlighter) {
		highlighter = await createHighlighter({
			themes: ["github-dark", "github-light"],
			langs: ["ts", "tsx", "js", "jsx", "json", "bash", "css", "html", "md", "svelte"],
		});
	}

	return highlighter.codeToHtml(code, {
		lang,
		themes: {
			light: "github-light",
			dark: "github-dark",
		},
		defaultColor: false,
	});
}
