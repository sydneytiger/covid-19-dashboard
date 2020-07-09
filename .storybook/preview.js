import '../src/style/App.css';

import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import React from 'react';
import { addDecorator } from '@storybook/react';
import { addParameters } from '@storybook/react';

addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>);

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
});

addons.setConfig({
  theme: themes.dark,
});
