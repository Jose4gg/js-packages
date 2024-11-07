/**
 * @type {import('eslint').ESLint.Plugin}
 */
const customRulesPlugin = {
  meta: {
    name: 'eslint-plugin-custom',
    version: '0.0.1',
  },
  rules: {
    'single-purpose-function': {
      meta: {
        type: 'suggestion',
        docs: {
          description: 'Enforce functions to have less than 20 instructions',
          recommended: false,
        },
        schema: [], // no options
        messages: {
          tooManyInstructions: 'Function should have less than 20 instructions/statements',
        },
      },
      create(context) {
        return {
          FunctionDeclaration(node) {
            const functionBody = node.body.body;
            if (functionBody.length > 20) {
              context.report({
                node,
                messageId: 'tooManyInstructions',
              });
            }
          },
        };
      },
    },
    'require-named-parameters': {
      meta: {
        type: 'suggestion',
        docs: {
          description: 'Enforce using named parameters for functions with multiple parameters',
          recommended: false,
        },
        hasSuggestions: true,
        schema: [], // no options
        messages: {
          useNamedParameters:
            'Functions with multiple parameters should use named parameters (object destructuring)',
          convertToNamedParameters: 'Convert to named parameters',
        },
      },
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

          const messageId = functionName ? 'useNamedParameters' : 'useNamedParameters';

          context.report({
            node,
            messageId,
            suggest: [
              {
                messageId: 'convertToNamedParameters',
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

module.exports = customRulesPlugin;
