import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';

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
      resolve(),
      typescript({
        tsconfig: './tsconfig.json',
        useTsconfigDeclarationDir: true,
      }),
    ],
    external: ['styled-components'],
  },
];
