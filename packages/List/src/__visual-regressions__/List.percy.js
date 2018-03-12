import React from 'react';
import List from '../List';
import { breakpoints } from '../../../../percy.config.js';
import css from 'tachyons'; //eslint-disable-line

suite('<List />', { widths: breakpoints }, () => {
  percySnapshot('Default', () => (
    <List>
      <p>I am a child of the list</p>
      <p>I am a child of the list</p>
      <p>I am a child of the list</p>
      <p>I am a child of the list</p>
      <p>I am a child of the list</p>
      <p>I am a child of the list</p>
    </List>
  ));
  percySnapshot('Lined Default', () => (
    <List
      lined
    >
      <p>I am a child of the list</p>
      <p>I am a child of the list</p>
      <p>I am a child of the list</p>
      <p>I am a child of the list</p>
      <p>I am a child of the list</p>
      <p>I am a child of the list</p>
    </List>
  ));
  percySnapshot('Line Color', () => (
    <List
      lineColor="red"
      lined
    >
      <p>I am a child of the list</p>
      <p>I am a child of the list</p>
      <p>I am a child of the list</p>
      <p>I am a child of the list</p>
      <p>I am a child of the list</p>
      <p>I am a child of the list</p>
    </List>
  ));
  percySnapshot('Line Width', () => (
    <List
      lineColor="blue"
      lined
      lineWidth={3}
    >
      <p>I am a child of the list</p>
      <p>I am a child of the list</p>
      <p>I am a child of the list</p>
      <p>I am a child of the list</p>
      <p>I am a child of the list</p>
      <p>I am a child of the list</p>
    </List>
  ));
});
