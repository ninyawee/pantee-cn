import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CbLdRPKC.js","_app/immutable/chunks/C9RuiY6R.js","_app/immutable/chunks/DubL5_2t.js","_app/immutable/chunks/CabKBMhf.js","_app/immutable/chunks/DXYbyDGJ.js","_app/immutable/chunks/80kT65X0.js","_app/immutable/chunks/Rlhmmpo1.js","_app/immutable/chunks/CNzQ-8td.js","_app/immutable/chunks/CscA801B.js"];
export const stylesheets = ["_app/immutable/assets/0.2zag6-q-.css"];
export const fonts = [];
