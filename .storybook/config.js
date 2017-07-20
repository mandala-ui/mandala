/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import infoAddon, { setDefaults } from '@storybook/addon-info';

setDefaults({
  inline: true,
  source: false,
});
setAddon(infoAddon);
setOptions({
  name: 'Gluons UI Kit',
  url: '',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: false,
});

configure(() => require('../stories'), module); //eslint-disable-line
