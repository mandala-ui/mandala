import React from 'react';
import OutlineDot from '../OutlineDot';
import { breakpoints } from '../../../../percy.config.js';
import css from 'tachyons'; //eslint-disable-line

suite('OutlineDot', { widths: breakpoints }, () => {
  percySnapshot('Default', () => (
    <OutlineDot />
  ));

  percySnapshot('renders a different color outline', () => (
    <OutlineDot
      borderColor="blue"
    />
  ));
  percySnapshot('renders a thicker border', () => (
    <OutlineDot
      borderWidth={2}
    />
  ));
  percySnapshot('renders a thicker inner area', () => (
    <OutlineDot
      innerBorderWidth={2}
    />
  ));
  percySnapshot('renders a different color inner area', () => (
    <OutlineDot
      innerColor="red"
    />
  ));
  percySnapshot('renders a different color dot', () => (
    <OutlineDot
      color="blue"
    />
  ));
  percySnapshot('renders a large version', () => (
    <OutlineDot
      large
    />
  ));
});
