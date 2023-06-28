import babel from '@rollup/plugin-babel';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json" assert { type: "json" };

export default {
  input: 'src/index.tsx',
  output: {
    file: `dist/index.js`,
    format: 'umd',
    name: 'DesignSystemIcons'
  },
  plugins: [
    typescript(),
    image(),
    postcss({
      extensions: [".css"],
      modules: true,
    }),
    nodeResolve({
      extensions: [".js"],
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
      'RELEASE_VER': `ver ${pkg.version}`,
    }),
    babel({
      presets: ["@babel/preset-react"],
    }),
    commonjs(),
  ]
}