import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import css from '../node_modules/tachyons/css/tachyons.min.css'; //eslint-disable-line
import { ProgressBar, SplitButton } from '../src';

storiesOf('ProgressBar/Docs', module)
  .addDecorator(withKnobs)
  .add(
    'interactive',
    () =>
      (<ProgressBar
        background={text('Background', 'light-gray')}
        color={text('Color', 'blue')}
        large={boolean('Large', false)}
        percentage={number('Percentage', 0,
          {
            range: true,
            min: 0,
            max: 100,
            step: 1,
          })}
        rounded={boolean('Rounded', true)}
      />),
  );

storiesOf('SplitButton/Docs', module)
  .addDecorator(withKnobs)
  .add(
    'interactive',
    () =>
      (<SplitButton
        disabled={boolean('Disabled', false)}
        baseColor={text('Base Color', 'moon-gray')}
        offText={text('Off Text', 'off')}
        offColor={text('Off Color', 'dark-red')}
        onColor={text('On Color', 'green')}
        onText={text('On Text', 'on')}
        onClick={action('SplitButton onClick Event')}
        isOn={boolean('Is On', false)}
        rounded={boolean('Rounded', true)}
      />),
  );
