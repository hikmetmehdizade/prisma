import auto from "@rollup/plugin-auto-install";

import dts from "rollup-plugin-dts";
import pkg from "./package.json" assert { type: "json" };
import commonJs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import nodeResolve from "rollup-plugin-node-resolve";
import json from "@rollup/plugin-json";
import sucrase from "@rollup/plugin-sucrase";
import esbild from "rollup-plugin-esbuild";

/**
 * @type {import('rollup').RollupOptions[]}
 */
const config = [
  {
    input: "./index.js",
    output: [
      {
        file: "./build/index.js",
        sourcemap: true,
        format: "commonjs",
      },
    ],
    plugins: [
      nodeResolve({
        extensions: [".js", ".ts", ".d.ts"],
        browser: true,
        preferBuiltins: true,
      }),
      sucrase({
        exclude: ["node_modules/**"],
        transforms: ["typescript"],
      }),
      commonJs(),
      json({
        include: ['package.json']
      }),
      esbild({
        target: "es2020",
        loaders: {
          ".json": "json",
        },
      }),
    ],
    external: Object.keys(pkg.dependencies),
  },
];
export default config;
