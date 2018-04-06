import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withReadme as readme } from 'storybook-readme';
import Button from '../packages/Button/src/Button.js';
import ButtonRM from '../packages/Button/README.md';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('interactive', readme(ButtonRM, () => (
    <Button
      color={text('Color', 'black')}
      disabled={boolean('Disabled', false)}
      onClick={action('Button onClick Event')}
      pill={boolean('Pill', false)}
      radius={number('Radius', 0,
          {
            range: true,
            min: 0,
            max: 3,
            step: 1,
          })}
    >
        Click Me
    </Button>
  )));
