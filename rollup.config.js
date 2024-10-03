import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import { createRequire } from 'node:module'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'

const require = createRequire(import.meta.url)
const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: Object.keys(packageJson.peerDependencies),
    plugins: [
      peerDepsExternal(),
      nodeResolve({
        extensions: ['.js', '.jsx'],
      }),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-react'],
        exclude: 'node_modules/**',
      }),
      postcss(),
      terser(),
    ],
  },
]
