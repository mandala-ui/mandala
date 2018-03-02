import React from 'react';
import Button from '../Button';
import css from '../../../../node_modules/tachyons/css/tachyons.min.css'; //eslint-disable-line

percySnapshot('Button Default', () => <Button>Click Me</Button>);
percySnapshot('Button Disabled', () => <Button disabled>Click Me</Button>);
percySnapshot('Button Radius 1', () => <Button radius={1}>Click Me</Button>);
percySnapshot('Button Radius 2', () => <Button radius={2}>Click Me</Button>);
percySnapshot('Button Radius 3', () => <Button radius={3}>Click Me</Button>);
percySnapshot('Button Pill', () => <Button pill>Click Me</Button>);
