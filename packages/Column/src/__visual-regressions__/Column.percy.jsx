import React from 'react';
import Column from '../Column';
import { breakpoints } from '../../../../percy.config.js';
import css from 'tachyons'; //eslint-disable-line

const testContent = (
  <div>
    <span>lorem ipsum</span>
    <span>lorem ipsum</span>
    <span>lorem ipsum</span>
    <span>lorem ipsum</span>
    <span>lorem ipsum</span>
    <span>lorem ipsum</span>
  </div>
);

suite('Column', { widths: breakpoints }, () => {
  percySnapshot('Default', () => (
    <Column>
      {testContent}
    </Column>
  ));

  percySnapshot('Background Color', () => (
    <Column
      backgroundColor="gray"
    >
      {testContent}
    </Column>
  ));

  percySnapshot('Border Radius 1', () => (
    <Column
      backgroundColor="gray"
      radius={1}
    >
      {testContent}
    </Column>
  ));

  percySnapshot('Border Radius 2', () => (
    <Column
      backgroundColor="gray"
      radius={2}
    >
      {testContent}
    </Column>
  ));

  percySnapshot('Border Radius 3', () => (
    <Column
      backgroundColor="gray"
      radius={3}
    >
      {testContent}
    </Column>
  ));

  percySnapshot('Border Radius 4', () => (
    <Column
      backgroundColor="gray"
      radius={4}
    >
      {testContent}
    </Column>
  ));

  percySnapshot('Padding 1', () => (
    <Column
      backgroundColor="gray"
      padding={1}
    >
      {testContent}
    </Column>
  ));

  percySnapshot('Padding 2', () => (
    <Column
      backgroundColor="gray"
      padding={2}
    >
      {testContent}
    </Column>
  ));

  percySnapshot('Padding 3', () => (
    <Column
      backgroundColor="gray"
      padding={3}
    >
      {testContent}
    </Column>
  ));

  percySnapshot('Padding 4', () => (
    <Column
      backgroundColor="gray"
      padding={4}
    >
      {testContent}
    </Column>
  ));

  percySnapshot('Padding 5', () => (
    <Column
      backgroundColor="gray"
      padding={5}
    >
      {testContent}
    </Column>
  ));
});
