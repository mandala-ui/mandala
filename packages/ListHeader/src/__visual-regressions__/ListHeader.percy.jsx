import React from 'react';
import ListHeader from '../ListHeader';
import { breakpoints } from '../../../../percy.config.js';
import css from 'tachyons'; //eslint-disable-line

const testContent = (<h3>I am a title</h3>);

suite('<ListHeader />', { widths: breakpoints }, () => {
  percySnapshot('Default', () => (
    <ListHeader>
      {testContent}
    </ListHeader>
  ));
  percySnapshot('lined', () => (
    <ListHeader
      lined
    >
      {testContent}
    </ListHeader>
  ));
  percySnapshot('indented', () => (
    <ListHeader
      lined
      indented
    >
      {testContent}
    </ListHeader>
  ));
  percySnapshot('line width 1', () => (
    <ListHeader
      lined
      indented
      lineWidth={1}
    >
      {testContent}
    </ListHeader>
  ));
  percySnapshot('line width 2', () => (
    <ListHeader
      lined
      indented
      lineWidth={2}
    >
      {testContent}
    </ListHeader>
  ));
  percySnapshot('line width 3', () => (
    <ListHeader
      lined
      indented
      lineWidth={3}
    >
      {testContent}
    </ListHeader>
  ));
  percySnapshot('line width 4', () => (
    <ListHeader
      lined
      indented
      lineWidth={4}
    >
      {testContent}
    </ListHeader>
  ));
  percySnapshot('line width 5', () => (
    <ListHeader
      lined
      indented
      lineWidth={5}
    >
      {testContent}
    </ListHeader>
  ));
});
