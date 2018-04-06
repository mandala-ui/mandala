/* eslint-disable */
module.exports = function (plop) {
    plop.setPartial('injectPascalCaseName', '{{properCase name}}');
    plop.setPartial('injectDashCaseName', '{{dashCase name}}');
    plop.setGenerator('Pure Component', {
        description: 'scaffolds a functional component',
        prompts: [
          {
            type: 'input',
            name: 'name',
            message: 'Component Name (use PascalCase):',
            validate: function (value) {
              if ((/^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/).test(value)) { return true; }
              return 'Name needs to be PascalCase (I told you this...)';
            },
          },
          {
            type: 'confirm',
            name: 'usesEvents',
            message: 'Does your component use callbacks with events? (Storybook Action Logger)'
          },
          {
            type: 'checkbox',
            name: 'knobs',
            message: 'Which prop types (Storybook Knobs) will you need?',
            choices: [
              { name: 'String',
                value: 'text',
              },
              { name: 'Boolean',
                value: 'boolean'
              },
              { name: 'Number',
                value: 'number'
              },
              { name: 'Object',
                value: 'object',
              },
              { name: 'Array',
                value: 'array',
              },
              { name: 'Range (Number Slider)',
                value: 'range'
              },
            ]
          }
        ],
        actions: [{
            type: 'add',
            path: 'packages/{{properCase name}}/src/{{properCase name}}.js',
            templateFile: '.generators/functionalcomponent.hbs'
        },
        {
          type: 'add',
          path: 'packages/{{properCase name}}/src/__tests__/{{properCase name}}.test.js',
          templateFile: '.generators/test.hbs'
        },
        {
          type: 'add',
          path: 'stories/{{properCase name}}.story.js',
          templateFile: '.generators/story.hbs'
        },
        {
          type: 'add',
          path: 'packages/{{properCase name}}/src/__visual-regressions__/{{properCase name}}.percy.js',
          templateFile: '.generators/visual-regressions.hbs'
        },
        {
            type: 'add',
            path: 'packages/{{properCase name}}/LICENSE.md',
            templateFile: '.generators/LICENSE.hbs'
        },
        {
            type: 'add',
            path: 'packages/{{properCase name}}/package.json',
            templateFile: '.generators/package.hbs'
        },
        {
            type: 'add',
            path: 'packages/{{properCase name}}/README.md',
            templateFile: '.generators/README.hbs'
        },
      ]
    });
};
