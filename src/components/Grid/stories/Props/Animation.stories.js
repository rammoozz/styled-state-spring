import React from 'react';
import transitionProps from './transitionProps.md';
import springProps from './springProps.md';
import { withDocs } from 'storybook-readme';
import { storiesOf } from '@storybook/react';

storiesOf('Grid.Props.Animation', module)
  .add('springProps', withDocs(springProps, () => <div />))
  .add('transitionProps', withDocs(transitionProps, () => <div />));
