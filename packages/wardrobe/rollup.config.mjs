import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';

export default [
  {
    input: ['src/index.ts'],
    output: [
      {
        file: 'lib/index.js',
        format: 'esm', // The format of the output bundle
        sourcemap: true,
        exports: 'named',
        globals: {}, // The global variable names corresponding to external modules
      },
    ],
    plugins: [
      resolve(), // So Rollup can find external modules
      typescript({
        tsconfig: './tsconfig.json',
        useTsconfigDeclarationDir: true,
      }),
    ],
    external: ['styled-components'],
  },
];
