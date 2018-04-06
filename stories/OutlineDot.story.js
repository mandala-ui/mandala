import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { withReadme as readme } from 'storybook-readme';
import OutlineDot from '../packages/OutlineDot/src/OutlineDot.js';
import OutlineDotRM from '../packages/OutlineDot/README.md';

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
