module.exports = files = [
  {
    type: 'add',
    path: 'packages/{{properCase name}}/src/__tests__/{{properCase name}}.test.js',
    templateFile: '.generators/test.hbs',
  },
  {
    type: 'add',
    path: 'stories/{{properCase name}}.story.js',
    templateFile: '.generators/story.hbs',
  },
  {
    type: 'add',
    path: 'packages/{{properCase name}}/src/__visual-regressions__/{{properCase name}}.percy.js',
    templateFile: '.generators/visual-regressions.hbs',
  },
  {
    type: 'add',
    path: 'packages/{{properCase name}}/LICENSE.md',
    templateFile: '.generators/LICENSE.hbs',
  },
  {
    type: 'add',
    path: 'packages/{{properCase name}}/package.json',
    templateFile: '.generators/package.hbs',
  },
  {
    type: 'add',
    path: 'packages/{{properCase name}}/README.md',
    templateFile: '.generators/README.hbs',
  },
]
