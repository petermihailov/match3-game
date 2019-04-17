import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, color, number} from '@storybook/addon-knobs';
import {CircleProgress} from './circle-progress';

const defaultColor = '#ff1461';

storiesOf('Components|Circle progress', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const options = {
      range: true,
      min: 0,
      max: 100,
      step: 1,
    };

    const props = {
      progress: number('Progress', 66, options),
      color: color('Color', defaultColor),
    };

    return (
      <CircleProgress {...props} />
    );
  });
