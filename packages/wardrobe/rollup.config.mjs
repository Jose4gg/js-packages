import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: ['src/index.ts'],
    output: [
      {
        file: 'lib/index.js',
        format: 'esm',
        sourcemap: true,
        exports: 'named',
        globals: {},
      },
    ],
    plugins: [
      resolve(),
      typescript({
        tsconfig: './tsconfig.json',
        useTsconfigDeclarationDir: true,
      }),
    ],
    external: ['styled-components'],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'lib/index.d.ts', format: 'es' }],
    plugins: [dts()],
    external: ['styled-components'],
  },
];
