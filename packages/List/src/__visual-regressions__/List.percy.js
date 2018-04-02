import React from 'react';
import List from '../List';
import { breakpoints } from '../../../../percy.config.js';
import css from 'tachyons'; //eslint-disable-line

suite('<List />', { widths: breakpoints }, () => {
  percySnapshot('Default', () => (
    <List>
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
    </List>
  ));
  percySnapshot('Lined Default', () => (
    <List
      lined
    >
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
    </List>
  ));
  percySnapshot('Line Color', () => (
    <List
      lineColor="red"
      lined
    >
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
    </List>
  ));
  percySnapshot('Line Width', () => (
    <List
      lineColor="blue"
      lined
      lineWidth={3}
    >
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
    </List>
  ));
  percySnapshot('Contained', () => (
    <List
      contained
      lineColor="blue"
      lined
      lineWidth={1}
    >
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
    </List>
  ));
  percySnapshot('Indented', () => (
    <List
      indented
      lineColor="green"
      lined
      lineWidth={1}
    >
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
      <span>I am a child of the list</span>
    </List>
  ));
});
