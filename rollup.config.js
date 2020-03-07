import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import alias from '@rollup/plugin-alias';

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  plugins: [
    typescript({ include: ['*.(t|j)s+(|x)', '**/*.ts+(|x)'] }),
    resolve(),
    alias({
      entries: [{ find: ' @js', replacement: './src' }],
    }),
  ],
};
