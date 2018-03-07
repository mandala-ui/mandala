import React from 'react';
import SplitButton from '../SplitButton';
import { breakpoints } from '../../../../percy.config.js';
import css from 'tachyons'; //eslint-disable-line

suite('SplitButton', { widths: breakpoints }, () => {
  percySnapshot('Default', () => (
    <SplitButton />
  ));
  percySnapshot('Is On', () => (
    <SplitButton isOn />
  ));
  percySnapshot('Pill', () => (
    <SplitButton pill />
  ));
  percySnapshot('Border Radius', () => (
    <SplitButton radius={3} />
  ));
  percySnapshot('No Text', () => (
    <SplitButton showText={false} />
  ));
  percySnapshot('Disabled', () => (
    <SplitButton disabled />
  ));
});
