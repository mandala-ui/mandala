import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import css from 'tachyons'; //eslint-disable-line
import {
  Button,
  ProgressBar,
  SplitButton,
  Tag,
} from '../src';

const CenterPadding = storyFn => (
  <div className="pa4 tc center w-100 courier">
    { storyFn() }
  </div>
);

addDecorator(CenterPadding);

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add(
    'interactive',
    () =>
      (<Button
        color={text('Color', 'gray')}
        large={boolean('Disabled', false)}
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
        Button
      </Button>),
  );

storiesOf('ProgressBar', module)
  .addDecorator(withKnobs)
  .add(
    'interactive',
    () =>
      (<ProgressBar
        background={text('Background', 'light-gray')}
        color={text('Color', 'gray')}
        large={boolean('Large', false)}
        percentage={number('Percentage', 50,
          {
            range: true,
            min: 0,
            max: 100,
            step: 1,
          })}
        rounded={boolean('Rounded', true)}
      />),
  );

storiesOf('SplitButton', module)
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

storiesOf('Tag', module)
  .addDecorator(withKnobs)
  .add(
    'interactive',
    () =>
      (<Tag
        color={text('Color', 'gray')}
      >
        Text
      </Tag>),
  );
