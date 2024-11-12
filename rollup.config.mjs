import typescript from "@rollup/plugin-typescript";
import vue from "rollup-plugin-vue";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
    {
      file: "dist/index.cjs.js",
      format: "cjs",
    },
  ],
  plugins: [typescript(), vue()],
  external: ["vue"],
};
