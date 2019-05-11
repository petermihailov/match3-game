import React from 'react';
import {storiesOf} from '@storybook/react';
import {Grid} from './grid';

const data = [
  2, 2, 3, 4, 2, 1,
  3, 5, 2, 1, 3, 3,
  2, 5, 1, 5, 3, 2,
  2, 4, 2, 2, 1, 2,
  4, 3, 4, 5, 3, 4,
  4, 2, 2, 5, 3, 2,
];

storiesOf('Components|Grid', module)
  .add('Default', () => (
    <Grid data={data}/>
  ));
