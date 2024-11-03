const { resolve } = require('node:path');
const tseslint = require('typescript-eslint');
const importPlugin = require('eslint-plugin-import');
const onlyWarnPlugin = require('eslint-plugin-only-warn');

const project = resolve(process.cwd(), 'tsconfig.json');

const customRulesPlugin = {
  rules: {
    'single-purpose-function': {
      create(context) {
        return {
          FunctionDeclaration(node) {
            const functionBody = node.body.body;
            if (functionBody.length > 20) {
              context.report({
                node,
                message: 'Function should have less than 20 instructions/statements',
              });
            }
          },
        };
      },
    },
    'verb-function-naming': {
      create(context) {
        return {
          FunctionDeclaration(node) {
            const functionName = node.id.name;
            const verbPrefixes = [
              'is',
              'has',
              'can',
              'should',
              'will',
              'create',
              'get',
              'update',
              'delete',
              'fetch',
              'handle',
              'validate',
            ];

            const hasVerbPrefix = verbPrefixes.some((prefix) => functionName.startsWith(prefix));

            const isBooleanReturningFunction =
              node.returnType && node.returnType.typeAnnotation.type === 'TSBooleanKeyword';

            if (!hasVerbPrefix && isBooleanReturningFunction) {
              context.report({
                node,
                message: 'Boolean returning functions should start with a verb like is/has/can',
              });
            }
          },
        };
      },
    },
    'no-abbreviations': {
      create(context) {
        const allowedAbbreviations = ['i', 'j', 'err', 'ctx', 'req', 'res', 'next', 'api', 'url'];

        return {
          Identifier(node) {
            const name = node.name;
            const isAllowed = allowedAbbreviations.includes(name.toLowerCase());

            if (!isAllowed && name.length < 3) {
              context.report({
                node,
                message: 'Avoid using abbreviations. Use complete words.',
              });
            }
          },
        };
      },
    },
    'require-named-parameters': {
      create(context) {
        return {
          FunctionDeclaration(node) {
            checkFunctionParameters(node, context);
          },
          ArrowFunctionExpression(node) {
            checkFunctionParameters(node, context);
          },
          FunctionExpression(node) {
            checkFunctionParameters(node, context);
          },
        };

        function checkFunctionParameters(node, context) {
          const params = node.params;
          if (params.length <= 1) return;
          if (params[0].type === 'ObjectPattern') return;

          const firstParamTypeAnnotation = params[0].typeAnnotation?.typeAnnotation;
          if (
            firstParamTypeAnnotation?.type === 'TSObjectType' ||
            firstParamTypeAnnotation?.type === 'TSTypeLiteral'
          ) {
            return;
          }

          let functionName = '';
          if (node.id) {
            functionName = node.id.name;
          } else if (node.parent.type === 'VariableDeclarator') {
            functionName = node.parent.id.name;
          }

          const message = functionName
            ? `Function '${functionName}' with multiple parameters should use named parameters (object destructuring)`
            : 'Functions with multiple parameters should use named parameters (object destructuring)';

          context.report({
            node,
            message,
            suggest: [
              {
                desc: 'Convert to named parameters',
                fix: (fixer) => {
                  const paramNames = params.map((p) =>
                    p.type === 'Identifier' ? p.name : 'param',
                  );
                  const newParams = `{ ${paramNames.join(', ')} }`;
                  const start = params[0].range[0];
                  const end = params[params.length - 1].range[1];
                  return fixer.replaceTextRange([start, end], newParams);
                },
              },
            ],
          });
        }
      },
    },
  },
};

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config[]} */
module.exports = {
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    import: importPlugin,
    'only-warn': onlyWarnPlugin,
    'custom-rules': customRulesPlugin,
  },
  languageOptions: {
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignores: ['.*.js', 'node_modules/', 'dist/'],
  rules: {
    // TypeScript Basic Rules
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'error',

    // Naming Conventions
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
      },
      {
        selector: 'function',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
      },
    ],

    // Import Rules
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],

    // Error Handling
    'no-throw-literal': 'error',

    // Custom Rules
    'custom-rules/single-purpose-function': 'error',
    'custom-rules/verb-function-naming': 'warn',
    'custom-rules/no-abbreviations': 'warn',
    'custom-rules/require-named-parameters': 'error',
  },
};
