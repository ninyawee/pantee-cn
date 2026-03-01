export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["icon.svg","r/index.json","r/map.json"]),
	mimeTypes: {".svg":"image/svg+xml",".json":"application/json"},
	_: {
		client: {start:"_app/immutable/entry/start.Dr0b-bc9.js",app:"_app/immutable/entry/app.DNYwAfDr.js",imports:["_app/immutable/entry/start.Dr0b-bc9.js","_app/immutable/chunks/CuHdyfUY.js","_app/immutable/chunks/DubL5_2t.js","_app/immutable/chunks/DefGBdXS.js","_app/immutable/chunks/CEevcxqP.js","_app/immutable/entry/app.DNYwAfDr.js","_app/immutable/chunks/PPVm8Dsz.js","_app/immutable/chunks/DubL5_2t.js","_app/immutable/chunks/B_k1_itu.js","_app/immutable/chunks/C9RuiY6R.js","_app/immutable/chunks/CEevcxqP.js","_app/immutable/chunks/Cj1SJ7yu.js","_app/immutable/chunks/DXYbyDGJ.js","_app/immutable/chunks/Rlhmmpo1.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/docs","/docs/__data.json","/docs/advanced-usage","/docs/advanced-usage/__data.json","/docs/api-reference","/docs/basic-map","/docs/basic-map/__data.json","/docs/clusters","/docs/clusters/__data.json","/docs/controls","/docs/controls/__data.json","/docs/installation","/docs/markers","/docs/markers/__data.json","/docs/popups","/docs/popups/__data.json","/docs/routes","/docs/routes/__data.json"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
