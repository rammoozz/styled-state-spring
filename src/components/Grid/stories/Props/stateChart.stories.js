import React from 'react';
import StateChart from './StateChart.md';
import { withDocs } from 'storybook-readme';
import { storiesOf } from '@storybook/react';

storiesOf('Grid.Props.State', module).add(
  'statechart',
  withDocs(StateChart, () => <div />)
);
