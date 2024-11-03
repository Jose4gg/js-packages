import type { PlopTypes } from "@turbo/gen";


const generator = (plop: PlopTypes.NodePlopAPI): void => {
  // Helper to convert to PascalCase
  plop.setHelper('pascalCase', (text) => {
    return text
      .split(/[-_\s]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  });

  // Helper to convert to camelCase
  plop.setHelper('camelCase', (text) => {
    const pascalCased = plop.getHelper('pascalCase')(text);
    return pascalCased.charAt(0).toLowerCase() + pascalCased.slice(1);
  });

  // Component generator
  plop.setGenerator('component', {
    description: 'Create a new React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/index.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.types.ts',
        templateFile: 'plop-templates/Component.types.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/Component.stories.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.ts',
        templateFile: 'plop-templates/Component.test.ts.hbs'
      }
    ]
  });
};

export default generator;