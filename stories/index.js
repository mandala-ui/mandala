import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import css from 'tachyons'; //eslint-disable-line
import Button from '../packages/Button/src/Button.js';
import ProgressBar from '../packages/ProgressBar/src/ProgressBar.js';
import SplitButton from '../packages/SplitButton/src/SplitButton.js';
import Tag from '../packages/Tag/src/Tag.js';

const CenterPadding = storyFn => (
  <div className="">
    <div className="pa5 tc center w-100 flex justify-center sans-serif">
      { storyFn() }
    </div>
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
        rounded={boolean('Rounded', false)}
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
        onColor={text('On Color', 'green')}
        onClick={action('SplitButton onClick Event')}
        isOn={boolean('Is On', false)}
        pill={boolean('Pill', false)}
        radius={number('Radius', 0,
          {
            range: true,
            min: 0,
            max: 3,
            step: 1,
          })}
        showText={boolean('Show Text', true)}
      />),
  );

storiesOf('Tag', module)
  .addDecorator(withKnobs)
  .add(
    'interactive',
    () =>
      (<Tag
        color={text('Color', 'blue')}
        large={boolean('Large', false)}
      >
        Text
      </Tag>),
  );
