import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import {uglify} from 'rollup-plugin-uglify';
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
      outDir: './dist',
      typescript: require('typescript'),
    }),
    uglify(),
    postcss({
      minimize: true,
      extract: true,
    }),
  ],
};
