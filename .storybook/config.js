import {addParameters, configure} from '@storybook/react';
import {themes} from '@storybook/theming';

addParameters({
  options: {
    theme: themes.dark,
  },
});

const req = require.context('../src', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
