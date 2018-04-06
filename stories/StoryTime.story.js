import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withReadme as readme } from 'storybook-readme';
import StoryTime from '../packages/StoryTime/src/StoryTime.js';
import StoryTimeRM from '../packages/StoryTime/README.md';

storiesOf('StoryTime', module)
  .addDecorator(withKnobs)
  .add('interactive', readme(StoryTimeRM, () => (
    <StoryTime />
  )));
