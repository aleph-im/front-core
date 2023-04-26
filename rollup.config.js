import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import dts from 'rollup-plugin-dts'
import { babel } from '@rollup/plugin-babel'
// import typescript from '@rollup/plugin-typescript'

import { terser } from 'rollup-plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.ts',
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
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: ['.ts', '.tsx'],
      }),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        extensions: ['.ts', '.tsx'],
        include: ['src/**/*'],
        exclude: 'node_modules/**',
      }),
      // typescript({ tsconfig: './tsconfig.json' }),
      terser(),
    ],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
  {
    input: './tailwind.config.js',
    output: [{ file: 'dist/tailwind.config.js', format: 'cjs' }],
  },
]
