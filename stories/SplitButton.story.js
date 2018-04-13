import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withReadme as readme } from 'storybook-readme';
import SplitButton from '../packages/SplitButton/src/SplitButton.js';
import SplitButtonRM from '../packages/SplitButton/README.md';

storiesOf('SplitButton', module)
  .addDecorator(withKnobs)
  .add('interactive', readme(SplitButtonRM, () =>
    (<SplitButton
      backgroundColor={text('Base Color', 'white')}
      disabled={boolean('Disabled', false)}
      isOn={boolean('Is On', false)}
      offColor={text('Off Color', 'dark-red')}
      onClick={action('SplitButton onClick Event')}
      onColor={text('On Color', 'green')}
      pill={boolean('Pill', false)}
      radius={number('Radius', 0,
        {
          range: true,
          min: 0,
          max: 4,
          step: 1,
        })}
      showLabels={boolean('Show Labels', true)}
    />)));
