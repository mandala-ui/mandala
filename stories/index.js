import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import css from '../node_modules/tachyons/css/tachyons.min.css'; //eslint-disable-line
import { SplitButton } from '../src';

storiesOf('Toggle Switch', module)
  .addDecorator(withKnobs)
  .addWithInfo('Interactive Demo', 'This is info', () =>
    <SplitButton
      disabled={boolean('Disabled', false)}
      baseColor={text('Base Color', 'moon-gray')}
      offText={text('Off Text', 'off')}
      offColor={text('Off Color', 'dark-red')}
      onColor={text('On Color', 'green')}
      onText={text('On Text', 'on')}
      onClick={action('clicked')}
      isOn={boolean('Is On', false)}
      rounded={boolean('Rounded', true)}
    />,
);
