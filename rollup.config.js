import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import run from "@rollup/plugin-run";

export default ({ watch }) => {
  return {
    input: "src/index.js",
    output: {
      dir: "dist",
      format: "cjs"
    },
    plugins: [
      typescript({ include: ["*.(t|j)s+(|x)", "**/*.ts+(|x)"] }),
      resolve(),
      watch && run()
    ]
  };
};
