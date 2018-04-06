import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { withReadme as readme } from 'storybook-readme';
import ListHeader from '../packages/ListHeader/src/ListHeader.js';
import ListHeaderRM from '../packages/ListHeader/README.md';

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
