import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { withReadme as readme } from 'storybook-readme';
import List from '../packages/List/src/List.js';
import ListRM from '../packages/List/README.md';

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
      narrow={boolean('Narrow', false)}
      wide={boolean('Wide', false)}
    >
      <span>This just needs to be an element of some type</span>
      <span>It can be nearly anything</span>
      <span>It will inherit styles though</span>
      <span>So you are responsible for taking care of that</span>
    </List>
  )));
