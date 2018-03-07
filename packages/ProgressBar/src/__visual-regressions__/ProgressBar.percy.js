import React from 'react';
import ProgressBar from '../ProgressBar';
import { breakpoints } from '../../../../percy.config.js';
import css from 'tachyons'; //eslint-disable-line

suite('ProgressBar', { widths: breakpoints }, () => {
  percySnapshot('Default', () => (
    <ProgressBar />
  ));
  percySnapshot('Custom Bar Color', () => (
    <ProgressBar color="blue" />
  ));
  percySnapshot('Custom Background Color', () => (
    <ProgressBar background="blue" />
  ));
  percySnapshot('Large', () => (
    <ProgressBar large />
  ));
  percySnapshot('Rounded', () => (
    <ProgressBar rounded />
  ));
  percySnapshot('0%', () => (
    <ProgressBar percentage={0} />
  ));
  percySnapshot('100%', () => (
    <ProgressBar percentage={100} />
  ));
});
