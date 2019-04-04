import React from 'react';
import Gridmd from '../Grid.md';
import { withDocs } from 'storybook-readme';
import { storiesOf } from '@storybook/react';
import Grid from '../Grid';

storiesOf('Grid', module).add('- README -', withDocs(Gridmd, () => <Grid />), {
  props: { propTables: [Grid] },
});
