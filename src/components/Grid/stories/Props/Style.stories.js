import React from 'react';
import Style from './Style.md';
import { withDocs } from 'storybook-readme';
import { storiesOf } from '@storybook/react';

storiesOf('Grid.Props.Style', module).add(
  'css',
  withDocs(Style, () => <div />)
);
