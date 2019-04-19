import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, color, number} from '@storybook/addon-knobs';
import {Progress} from './progress';

const defaultColor = '#ff1461';

storiesOf('Components|Progress', module)
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
      <Progress {...props} />
    );
  });
