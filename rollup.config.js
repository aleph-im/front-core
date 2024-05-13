import path from 'path'
import process from 'process'
import * as url from 'url'
import { readFileSync } from 'node:fs'

import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import dts from 'rollup-plugin-dts'

const __dirname = url.fileURLToPath(new url.URL('.', import.meta.url))

const tsconfig = path.join(__dirname, './tsconfig.json')
const packagePath = path.join(process.cwd(), 'package.json')
const packageJson = JSON.parse(readFileSync(packagePath))

// https://gist.github.com/aleclarson/9900ed2a9a3119d865286b218e14d226

const bundle = (config) => ({
  ...config,
  input: 'src/index.ts',
  // external: (id) => !/^[./]/.test(id) && id !== 'src/index.ts',
})

export default [
  bundle({
    plugins: [dts({ tsconfig })],
    output: {
      file: packageJson.types,
      format: 'esm',
    },
  }),
  bundle({
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
  }),
  {
    input: './tailwind.config.js',
    output: [{ file: 'dist/tailwind.config.js', format: 'cjs' }],
  },
]
