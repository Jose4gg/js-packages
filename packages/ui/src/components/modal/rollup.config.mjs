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
        tsconfig: './tsconfig.json',
      }),
    ],
    external: ['styled-components', 'focus-trap-react', 'react', 'react/jsx-runtime'],
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