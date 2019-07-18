import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, text, select, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withReadme as readme } from 'storybook-readme';
import Button from '../packages/Button/src/Button.tsx';
import ButtonRM from '../packages/Button/README.md';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('interactive', readme(ButtonRM, () => (
    <Button
      color={text('Color', 'black')}
      disabled={boolean('Disabled', false)}
      onClick={action('Button onClick Event')}
      radius={select('Radius', { 0:'0', 1:'1', 2:'2', 3:'3', "Pill": 'pill'}, 'pill')}
    >
        <span>Click Me</span>
    </Button>
  )));
