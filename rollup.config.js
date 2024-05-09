import path from 'path'
import process from 'process'
import * as url from 'url'
import { readFileSync } from 'node:fs'

import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import dts from 'rollup-plugin-dts'
import { babel } from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import del from 'rollup-plugin-delete'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const tsconfig = path.join(__dirname, './tsconfig.json')
const packagePath = path.join(process.cwd(), 'package.json')
const packageJson = JSON.parse(readFileSync(packagePath))
// const packageName = packageJson.name.split('/').pop()

export default [
  // @note: Generate types
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({ extensions: ['.ts', '.tsx', '.js', '.mjs', '.json', '.node'] }),
      commonjs(),
      typescript({ tsconfig, emitDeclarationOnly: true }),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: packageJson.types, format: 'esm' }],
    plugins: [
      dts({ tsconfig }),
      del({ targets: 'dist/esm/types', hook: 'buildEnd' }),
    ],
  },
  // @note: Generate tailwind output config file
  {
    input: './tailwind.config.js',
    output: [{ file: 'dist/tailwind.config.js', format: 'cjs' }],
  },
  // @note: Generate cjs and esm code bundle
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: ['.ts', '.tsx'],
        preferBuiltins: true,
      }),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        extensions: ['.ts', '.tsx'],
        include: ['src/**/*'],
        exclude: 'node_modules/**',
      }),
      terser(),
    ],
  },
  // @note: Generate iife browser code bundle
  // @todo: Not used at the moment
  // {
  //   input: 'src/index.ts',
  //   output: [
  //     {
  //       file: packageJson.browser,
  //       format: 'iife',
  //       sourcemap: true,
  //       inlineDynamicImports: true,
  //       name: packageName,
  //     },
  //   ],
  //   plugins: [
  //     // peerDepsExternal(),
  //     resolve({
  //       extensions: ['.ts', '.tsx'],
  //       preferBuiltins: true,
  //       browser: true,
  //     }),
  //     commonjs(),
  //     babel({
  //       babelHelpers: 'bundled',
  //       extensions: ['.ts', '.tsx'],
  //       include: ['src/**/*'],
  //       exclude: 'node_modules/**',
  //     }),
  //     terser(),
  //   ],
  // },
]
