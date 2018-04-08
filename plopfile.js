const union = require('lodash/union');
const prompts = require('./.generators/shared-prompts.js');
const actions = require('./.generators/shared-actions.js');

module.exports = function generate(plop) {
  plop.setPartial('injectPascalCaseName', '{{properCase name}}');
  plop.setPartial('injectDashCaseName', '{{dashCase name}}');
  plop.setGenerator('Functional Component', {
    description: 'scaffolds a function that returns JSX',
    prompts,
    actions: union(
      actions,
      [
        {
          type: 'add',
          path: 'packages/{{properCase name}}/src/{{properCase name}}.js',
          templateFile: '.generators/functional-component.hbs',
        },
      ],
    ),
  });
  plop.setGenerator('Pure Component', {
    description: 'scaffolds a React PureComponent',
    prompts,
    actions: union(
      actions,
      [
        {
          type: 'add',
          path: 'packages/{{properCase name}}/src/{{properCase name}}.js',
          templateFile: '.generators/pure-component.hbs',
        },
      ],
    ),
  });
  plop.setGenerator('Stateful Component', {
    description: 'scaffolds a stateful React Component',
    prompts,
    actions: union(
      actions,
      [
        {
          type: 'add',
          path: 'packages/{{properCase name}}/src/{{properCase name}}.js',
          templateFile: '.generators/stateful-component.hbs',
        },
      ],
    ),
  });
};
