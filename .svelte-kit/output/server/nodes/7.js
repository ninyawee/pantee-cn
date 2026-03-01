import * as server from '../entries/pages/docs/basic-map/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/docs/basic-map/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/docs/basic-map/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.BmFA8qH7.js","_app/immutable/chunks/C9RuiY6R.js","_app/immutable/chunks/DubL5_2t.js","_app/immutable/chunks/BWR6srJi.js","_app/immutable/chunks/BeoVbrt-.js","_app/immutable/chunks/B_k1_itu.js","_app/immutable/chunks/CabKBMhf.js","_app/immutable/chunks/DXYbyDGJ.js","_app/immutable/chunks/Cj1SJ7yu.js","_app/immutable/chunks/CEevcxqP.js","_app/immutable/chunks/D78XlnGj.js","_app/immutable/chunks/Mcxum3_-.js","_app/immutable/chunks/B7ninZ2J.js","_app/immutable/chunks/Rlhmmpo1.js","_app/immutable/chunks/CzDSEFLd.js","_app/immutable/chunks/Okh-J6gK.js","_app/immutable/chunks/CscA801B.js","_app/immutable/chunks/BGN9LF6I.js","_app/immutable/chunks/CJrpYXee.js","_app/immutable/chunks/VOTZlRgY.js","_app/immutable/chunks/RSse0vIy.js","_app/immutable/chunks/DefGBdXS.js","_app/immutable/chunks/CIqhvVy_.js","_app/immutable/chunks/CuHdyfUY.js"];
export const stylesheets = [];
export const fonts = [];
