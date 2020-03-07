import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.js",
  output: {
    dir: "dist",
    format: "cjs"
  },
  plugins: [
    typescript({ include: ["*.(t|j)s+(|x)", "**/*.ts+(|x)"] }),
    resolve()
  ]
};
