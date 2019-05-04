import React from 'react';
import {storiesOf} from '@storybook/react';
import {Mana, Damage, Health} from './';

storiesOf('Components|Piece', module)
  .add('Mana Low', () => (
    <Mana level="low" />
  ))
  .add('Mana Mid', () => (
    <Mana level="mid" />
  ))
  .add('Mana High', () => (
    <Mana level="high" />
  ))
  .add('Health', () => (
    <Health />
  ))
  .add('Damage', () => (
    <Damage />
  ));
