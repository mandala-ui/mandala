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
  percySnapshot('Indented', () => (
    <ListHeader
      lined
      indented
    >
      {testContent}
    </ListHeader>
  ));
  percySnapshot('Underlined', () => (
    <ListHeader
      lined
    >
      {testContent}
    </ListHeader>
  ));
  percySnapshot('Underlined: custom color', () => (
    <ListHeader
      lineColor="blue"
      lined
    >
      {testContent}
    </ListHeader>
  ));
  percySnapshot('Underlined: line width 1', () => (
    <ListHeader
      lined
      lineWidth={1}
    >
      {testContent}
    </ListHeader>
  ));
  percySnapshot('Underlined: line width 2', () => (
    <ListHeader
      lined
      lineWidth={2}
    >
      {testContent}
    </ListHeader>
  ));
  percySnapshot('Underlined: line width 3', () => (
    <ListHeader
      lined
      lineWidth={3}
    >
      {testContent}
    </ListHeader>
  ));
  percySnapshot('Underlined: line width 4', () => (
    <ListHeader
      lined
      lineWidth={4}
    >
      {testContent}
    </ListHeader>
  ));
  percySnapshot('Underlined: line width 5', () => (
    <ListHeader
      lined
      lineWidth={5}
    >
      {testContent}
    </ListHeader>
  ));
});
