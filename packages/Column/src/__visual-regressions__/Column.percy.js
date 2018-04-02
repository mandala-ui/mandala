import React from 'react';
import Column from '../Column';
import { breakpoints } from '../../../../percy.config.js';
import css from 'tachyons'; //eslint-disable-line

const testContent = (
  <div className="vh-25">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
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
      backgroundColor="moon-gray"
    >
      {testContent}
    </Column>
  ));

  percySnapshot('Border Radius 1', () => (
    <Column
      backgroundColor="moon-gray"
      radius={1}
    >
      {testContent}
    </Column>
  ));

  percySnapshot('Border Radius 2', () => (
    <Column
      backgroundColor="moon-gray"
      radius={2}
    >
      {testContent}
    </Column>
  ));

  percySnapshot('Border Radius 3', () => (
    <Column
      backgroundColor="moon-gray"
      radius={3}
    >
      {testContent}
    </Column>
  ));

  percySnapshot('Border Radius 4', () => (
    <Column
      backgroundColor="moon-gray"
      radius={4}
    >
      {testContent}
    </Column>
  ));

  percySnapshot('Padding 1', () => (
    <Column
      backgroundColor="moon-gray"
      padding={1}
    >
      {testContent}
    </Column>
  ));

  percySnapshot('Padding 2', () => (
    <Column
      backgroundColor="moon-gray"
      padding={2}
    >
      {testContent}
    </Column>
  ));

  percySnapshot('Padding 3', () => (
    <Column
      backgroundColor="moon-gray"
      padding={3}
    >
      {testContent}
    </Column>
  ));

  percySnapshot('Padding 4', () => (
    <Column
      backgroundColor="moon-gray"
      padding={4}
    >
      {testContent}
    </Column>
  ));

  percySnapshot('Padding 5', () => (
    <Column
      backgroundColor="moon-gray"
      padding={5}
    >
      {testContent}
    </Column>
  ));
});
