module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Component Name (use PascalCase):',
    validate(value) {
      if ((/^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/).test(value)) { return true; }
      return 'Name needs to be PascalCase (I told you this...)';
    },
  },
  {
    type: 'confirm',
    name: 'usesEvents',
    message: 'Does your component use callbacks with events? (Storybook Action Logger)',
  },
  {
    type: 'checkbox',
    name: 'knobs',
    message: 'Which prop types (Storybook Knobs) will you need?',
    choices: [
      {
        name: 'String',
        value: 'text',
      },
      {
        name: 'Boolean',
        value: 'boolean',
      },
      {
        name: 'Number',
        value: 'number',
      },
      {
        name: 'Object',
        value: 'object',
      },
      {
        name: 'Array',
        value: 'array',
      },
      {
        name: 'Range (Number Slider)',
        value: 'range',
      },
    ],
  },
];
