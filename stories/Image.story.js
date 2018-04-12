import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text, withKnobs } from '@storybook/addon-knobs';

import { withReadme as readme } from 'storybook-readme';
import Image from '../packages/Image/src/Image.js';
import ImageRM from '../packages/Image/README.md';

storiesOf('Image', module)
  .addDecorator(withKnobs)
  .add('interactive', readme(ImageRM, () => (
    <Image
      alt={text('Alt', 'placeholder')}
      url={text('URL', 'http://fillmurray.com/1600/900')}
      shadow={number('Shadow', 0, {
        range: true,
        min: 0,
        max: 5,
        step: 1,
      })}
      radius={number('Radius', 0, {
        range: true,
        min: 0,
        max: 4,
        step: 1,
      })}
    />
  )));
