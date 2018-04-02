import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import css from 'tachyons'; //eslint-disable-line
import Button from '../packages/Button/src/Button.js';
import Column from '../packages/Column/src/Column.js';
import List from '../packages/List/src/List.js';
import ListHeader from '../packages/ListHeader/src/ListHeader.js';
import OutlineDot from '../packages/OutlineDot/src/OutlineDot.js';
import ProgressBar from '../packages/ProgressBar/src/ProgressBar.js';
import SplitButton from '../packages/SplitButton/src/SplitButton.js';
import Tag from '../packages/Tag/src/Tag.js';

const CenterPadding = storyFn => (
  <div className="pa5 center w-100 flex justify-center sans-serif">
    { storyFn() }
  </div>
);

addDecorator(CenterPadding);

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('interactive', () => (
    <Button
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
    </Button>
  ));

storiesOf('Column', module)
  .addDecorator(withKnobs)
  .add('interactive', () => (
    <Column
      backgroundColor={text('Backround Color', 'near-white')}
      borderColor={text('Border Color', 'near-white')}
      padding={number('Padding', 0,
          {
            range: true,
            min: 0,
            max: 5,
            step: 1,
          })}
      radius={number('Border Radius', 2,
          {
            range: true,
            min: 0,
            max: 4,
            step: 1,
          })}
    >
      <div className="vh-25">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </Column>
  ));

storiesOf('List', module)
  .addDecorator(withKnobs)
  .add('interactive', () => (
    <List
      contained={boolean('Contained', false)}
      indented={boolean('Indented', false)}
      lineColor={text('Line Color', 'gray')}
      lined={boolean('Lined', false)}
      lineWidth={number('Line Width', 0,
          {
            range: true,
            min: 0,
            max: 5,
            step: 1,
          })}
      ordered={boolean('Ordered', false)}
    >
      <span>This just needs to be an element of some type</span>
      <span>It can be nearly anything</span>
      <span>It will inherit styles though</span>
      <span>So you are responsible for taking care of that</span>
    </List>
  ));

storiesOf('ListHeader', module)
  .addDecorator(withKnobs)
  .add('interactive', () => (
    <ListHeader
      indented={boolean('Indented', false)}
      lineColor={text('Line Color', 'black')}
      lined={boolean('Lined', false)}
      lineWidth={number('Line Width', 0,
          {
            range: true,
            min: 0,
            max: 5,
            step: 1,
          })}
    >
        At the top of a list
    </ListHeader>
  ));

storiesOf('ProgressBar', module)
  .addDecorator(withKnobs)
  .add('interactive', () =>
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
    />));

storiesOf('OutlineDot', module)
  .addDecorator(withKnobs)
  .add('interactive', () =>
    (<OutlineDot
      borderColor={text('Border Color', 'black')}
      borderWidth={number('Border Width', 0, {
          range: true,
          min: 0,
          max: 5,
          step: 1,
        })}
      innerBorderWidth={number('Inner Border Width', 1, {
          range: true,
          min: 0,
          max: 5,
          step: 1,
        })}
      innerColor={text('Inner Color', 'white')}
      color={text('Color', 'black')}
      large={boolean('Large', false)}
    />));

storiesOf('SplitButton', module)
  .addDecorator(withKnobs)
  .add('interactive', () =>
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
    />));

storiesOf('Tag', module)
  .addDecorator(withKnobs)
  .add('interactive', () => (
    <Tag
      color={text('Color', 'blue')}
      large={boolean('Large', false)}
    >
        Text
    </Tag>
  ));
