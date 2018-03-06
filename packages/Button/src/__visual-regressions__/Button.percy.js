import React from 'react';
import Button from '../Button';
import { breakpoints } from '../../../../percy.config.js';
import css from 'tachyons'; //eslint-disable-line

suite('Button', { widths: breakpoints }, () => {
  percySnapshot('Default', () => <Button>Click Me</Button>);
  percySnapshot('Disabled', () => <Button disabled>Click Me</Button>);
  percySnapshot('Radius 1', () => <Button radius={1}>Click Me</Button>);
  percySnapshot('Radius 2', () => <Button radius={2}>Click Me</Button>);
  percySnapshot('Radius 3', () => <Button radius={3}>Click Me</Button>);
  percySnapshot('Pill', () => <Button pill>Click Me</Button>);
});
