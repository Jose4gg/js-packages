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
        },
        schema: [], // no options
      },
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
    'require-named-parameters': {
      meta: {
        type: 'suggestion',
        docs: {
          description: 'Enforce using named parameters for functions with multiple parameters',
        },
        hasSuggestions: true,
        schema: [], // no options
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

module.exports = customRulesPlugin;
