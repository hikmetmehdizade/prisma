import { readFileSync } from "node:fs";
import dts from "rollup-plugin-dts";
import pkg from "./package.json" assert { type: "json" };
import commonJs from "rollup-plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import nodeResolve from "rollup-plugin-node-resolve";
import flatDts from 'rollup-plugin-flat-dts';


/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: "./index.ts",
  output: [
    {
      file: "./dist/index.js",
      sourcemap: true,
      format: "cjs",
    },
    {
      file: "./dist/index.d.ts",
      sourcemap: true,
      format: "esm",

      plugins: [flatDts()],
    },
  ],
  plugins: [
    nodeResolve(),
    commonJs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    dts(),
  ],
  external: Object.keys(pkg.dependencies),
};
export default config;
