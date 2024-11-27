import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
export default [
  {
    input: ['src/index.ts'],
    output: [
      {
        file: 'lib/index.mjs',
        format: 'esm',
        sourcemap: true,
        exports: 'named',
        globals: {},
      },
      {
        file: 'lib/index.js',
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
        globals: {},
      },
    ],
    plugins: [
      resolve({
        preferBuiltins: true,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.rollup.json',
      }),
    ],
    external: ['styled-components', 'react', 'react/jsx-runtime'],
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
