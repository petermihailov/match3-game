import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, color, number} from '@storybook/addon-knobs';
import {Explosion} from './exsplosion';
import {Current} from './current';
import {Demo} from './demo';

const defaultColor = '#ff1461';
const canvasWidth = 400;
const canvasHeight = 300;

const AnimationGroup = 'Animation';
const PositionGroup = 'Animation';

storiesOf('Canvas effects|Explosion', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Demo
      animation={Explosion}
      args={{
        color: color('Color', defaultColor, AnimationGroup),
        duration: number('Duration', 1200, {range: true, min: 200, max: 10000, step: 100}, AnimationGroup),
        distance: number('Distance', 32, {min: 0, max: 100}, AnimationGroup),
        particles: number('Particles', 25, {min: 1, max: 100}, AnimationGroup),
        x: number('X', canvasWidth / 2, {min: 0, max: canvasWidth}, PositionGroup),
        y: number('Y', canvasHeight / 2, {min: 0, max: canvasHeight}, PositionGroup),
      }}
    />
  ));

storiesOf('Canvas effects|Current', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Demo
      animation={Current}
      args={{
        color: color('Color', defaultColor, AnimationGroup),
        x1: number('X1', canvasWidth / 8, {min: 0, max: canvasWidth}, PositionGroup),
        y1: number('Y1', canvasHeight / 2, {min: 0, max: canvasHeight}, PositionGroup),
        x2: number('X2', canvasWidth / 1.2, {min: 0, max: canvasWidth}, PositionGroup),
        y2: number('Y2', canvasHeight / 2, {min: 0, max: canvasHeight}, PositionGroup),
      }}
    />
  ));
