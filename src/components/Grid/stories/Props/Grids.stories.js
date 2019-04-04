import React from 'react';
import gridTemplateColumns from './gridTemplateColumns.md';
import gridTemplateRows from './gridTemplateRows.md';
import gridTemplateAreas from './gridTemplateAreas.md';
import gridArea from './gridArea.md';
import { withDocs } from 'storybook-readme';
import { storiesOf } from '@storybook/react';

storiesOf('Grid.Props.Grids', module)
  .add('gridTemplateColumns', withDocs(gridTemplateColumns, () => <div />))
  .add('gridTemplateRows', withDocs(gridTemplateRows, () => <div />))
  .add('gridTemplateAreas', withDocs(gridTemplateAreas, () => <div />))
  .add('gridArea', withDocs(gridArea, () => <div />));
