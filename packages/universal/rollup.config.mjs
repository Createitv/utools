import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import typescript from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'
import pkg from './package.json' assert { type: 'json' }
import del from 'rollup-plugin-delete'
import dts from 'rollup-plugin-dts'

const libraryName = 'universal'
const banner = `/*
 * ${pkg.name} ${pkg.version}
 * Licensed under the MIT License
 * Author: ${pkg.author}
 * WeChat: navalism1
 * Blog: https://www.panghuang.tech
 */`
export default [
  {
    input: `src/index.ts`,
    output: [
      {
        file: pkg.main,
        name: libraryName,
        format: 'umd',
        sourcemap: true,
        banner: banner,
      },
      {
        file: `dist/${libraryName}.umd.min.js`,
        name: libraryName,
        format: 'umd',
        sourcemap: false,
        banner: banner,
        plugins: [terser()],
      },
    ],
    external: [],
    watch: {
      include: 'src/**',
    },
    plugins: [
      // Allow json resolution
      json(),
      // Compile TypeScript files
      typescript({ useTsconfigDeclarationDir: true }),
      // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
      commonjs(),
      // Allow node_modules resolution, so you can use 'external' to control
      // which external modules to include in the bundle
      // https://github.com/rollup/rollup-plugin-node-resolve#usage
      resolve(),

      // Resolve source maps to the original source
      sourceMaps(),

      // Del dist folders
      del({ targets: 'dist/*' }),

      // Auto generate *.d.ts files
      // dts(),
    ],
  },
  {
    input: './dist/typings/index.d.ts',
    output: [{ file: './index.d.ts', format: 'es' }],
    plugins: [
      dts(),
      // 删除最后的 dts 和 typings文件夹
      del({ hook: 'buildEnd', targets: ['./dist/dts', './dist/typings'] }), // <------ New
      // Addition
    ],
  },
]
