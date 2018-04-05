/* eslint-disable */
import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withReadme as readme } from 'storybook-readme';
import css from 'tachyons';
import Button from '../packages/Button/src/Button.js';
import ButtonRM from '../packages/Button/README.md';
import Column from '../packages/Column/src/Column.js';
import ColumnRM from '../packages/Column/README.md';
import List from '../packages/List/src/List.js';
import ListRM from '../packages/List/README.md';
import ListHeader from '../packages/ListHeader/src/ListHeader.js';
import ListHeaderRM from '../packages/ListHeader/README.md';
import OutlineDot from '../packages/OutlineDot/src/OutlineDot.js';
import OutlineDotRM from '../packages/OutlineDot/README.md';
import ProgressBar from '../packages/ProgressBar/src/ProgressBar.js';
import ProgressBarRM from '../packages/ProgressBar/README.md';
import SplitButton from '../packages/SplitButton/src/SplitButton.js';
import SplitButtonRM from '../packages/SplitButton/README.md';
import Tag from '../packages/Tag/src/Tag.js';
import TagRM from '../packages/Tag/README.md';

const CenterPadding = storyFn => (
  <div className="pa5 center w-100 flex justify-center sans-serif">
    { storyFn() }
  </div>
);

addDecorator(CenterPadding);

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

storiesOf('Column', module)
  .addDecorator(withKnobs)
  .add('interactive', readme(ColumnRM, () => (
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
  )));

storiesOf('List', module)
  .addDecorator(withKnobs)
  .add('interactive', readme(ListRM, () => (
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
  )));

storiesOf('ListHeader', module)
  .addDecorator(withKnobs)
  .add('interactive', readme(ListHeaderRM, () => (
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
  )));

  storiesOf('OutlineDot', module)
  .addDecorator(withKnobs)
  .add('interactive', readme(OutlineDotRM, () =>
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
  />)));

storiesOf('ProgressBar', module)
  .addDecorator(withKnobs)
  .add('interactive', readme(ProgressBarRM, () =>
    (<ProgressBar
      backgroundColor={text('Background Color', 'near-white')}
      color={text('Color', 'black')}
      large={boolean('Large', false)}
      percent={number('Percentage', 0,
          {
            range: true,
            min: 0,
            max: 100,
            step: 1,
          })}
      pill={boolean('pill', false)}
    />)));

storiesOf('SplitButton', module)
  .addDecorator(withKnobs)
  .add('interactive', readme(SplitButtonRM, () =>
    (<SplitButton
      backgroundColor={text('Base Color', 'white')}
      disabled={boolean('Disabled', false)}
      isOn={boolean('Is On', false)}
      offColor={text('Off Color', 'dark-red')}
      offText={text('Off Text', 'off')}
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

storiesOf('Tag', module)
  .addDecorator(withKnobs)
  .add('interactive', readme(TagRM, () => (
    <Tag
      color={text('Color', 'black')}
      large={boolean('Large', false)}
      pill={boolean('Pill', false)}
      radius={number('Radius', 0,
        {
          range: true,
          min: 0,
          max: 4,
          step: 1,
        })}
    >
        Text
    </Tag>
  )));
