import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text, withKnobs } from '@storybook/addon-knobs';
import { withReadme as readme } from 'storybook-readme';
import Column from '../packages/Column/src/Column.js';
import ColumnRM from '../packages/Column/README.md';

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
          {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        </p>
      </div>
    </Column>
  )));
