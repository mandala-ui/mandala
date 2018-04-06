import React from 'react';
import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { addDecorator } from '@storybook/react';
import tachyons from 'tachyons';

const CenterPadding = storyFn => (
  <div className="pa5 sans-serif">
    <div className="w-100 flex justify-center">
      { storyFn() }
    </div>
  </div>
);

addDecorator(CenterPadding)

setOptions({
  name: 'Mandala UI',
  url: 'https://github.com/mandala-ui/mandala',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: true,
});

const req = require.context('../stories', true, /\.story\.js$/)

configure(() => {
  req.keys().forEach((filename) => req(filename))
}, module);
