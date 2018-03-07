import React from 'react';
import Tag from '../Tag';
import { breakpoints } from '../../../../percy.config.js';
import css from 'tachyons'; //eslint-disable-line
const testString = 'tag';

suite('Tag', { widths: breakpoints }, () => {
  percySnapshot('Default', () => (
    <Tag>
      {testString}
    </Tag>
  ));
  percySnapshot('Large', () => (
    <Tag large>
      {testString}
    </Tag>
  ));
  percySnapshot('Different Color', () => (
    <Tag color="red">
      {testString}
    </Tag>
  ));
});
