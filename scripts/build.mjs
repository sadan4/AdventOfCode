import esbuild from "esbuild";

import { getTodaysDir, getTodaysFilename } from "./common.mjs";

const watch = process.argv.includes("--watch");

/**
 * @type {import("esbuild").BuildOptions}
 */
const opts = {
    entryPoints: [getTodaysFilename()],
    bundle: true,
    treeShaking: true,
    platform: "node",
    format: "cjs",
    outExtension: { ".js": ".cjs" },
    outdir: getTodaysDir()
}
if (watch) {
    const ctx = await esbuild.context(opts);
    await ctx.watch();
} else {
    await esbuild.build(opts);
}
