import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
    postcss({
      minimize: true,
      extract: true,
    }),
  ],
};