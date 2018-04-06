import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { withReadme as readme } from 'storybook-readme';
import ProgressBar from '../packages/ProgressBar/src/ProgressBar.js';
import ProgressBarRM from '../packages/ProgressBar/README.md';

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
