import React from 'react';
import Button from '../Button';
import { breakpoints } from '../../../../percy.config.js';
import css from 'tachyons'; //eslint-disable-line
const testString = 'Click Me';

suite('Button', { widths: breakpoints }, () => {
  percySnapshot('Default', () => (
    <Button>
      {testString}
    </Button>
  ));
  percySnapshot('Disabled', () => (
    <Button disabled>
      {testString}
    </Button>
  ));
  percySnapshot('Radius 1', () => (
    <Button radius={1}>
      {testString}
    </Button>
  ));
  percySnapshot('Radius 2', () => (
    <Button radius={2}>
      {testString}
    </Button>
  ));
  percySnapshot('Radius 3', () => (
    <Button radius={3}>
      {testString}
    </Button>
  ));
  percySnapshot('Pill', () => (
    <Button pill>
      {testString}
    </Button>
  ));
  percySnapshot('Custom Color', () => (
    <Button color="blue">
      {testString}
    </Button>
  ));
});
