import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: ['src/index.ts'],
    output: [
      {
        file: 'lib/index.mjs',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'lib/index.js',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        preferBuiltins: true,
      }),
      commonjs(),
      typescript({
        tsconfigOverride: {
          exclude: ['node_modules', 'lib', 'src/tests/**/*'],
        },
      }),
      postcss({
        extensions: ['.css'],
        extract: true,
        minimize: true,
        sourceMap: true,
      }),
    ],
    external: [
      'styled-components',
      'react',
      'react/jsx-runtime',
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'lib/index.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  },
];
