import dts from "rollup-plugin-dts";
import { typescriptPaths } from "rollup-plugin-typescript-paths";

export default {
  input: "./dist/dts/index.d.ts",
  output: [{ file: "dist/index.d.ts", format: "es" }],
  plugins: [typescriptPaths(), dts()],
};
