//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-C1ZeHdt4.js
var manifest = { "08a758e7d6230116a0b6744cff40a623ca5ff37af1b98eecb391e40f1c570d17": {
	functionName: "sendEmail_createServerFn_handler",
	importer: () => import("./_ssr/server-functions-B9g4-yNT.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
