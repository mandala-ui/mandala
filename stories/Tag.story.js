import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { withReadme as readme } from 'storybook-readme';
import Tag from '../packages/Tag/src/Tag.js';
import TagRM from '../packages/Tag/README.md';

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
