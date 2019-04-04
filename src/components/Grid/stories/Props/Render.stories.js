import React from 'react';
import Render from './Render.md';
import { withDocs } from 'storybook-readme';
import { storiesOf } from '@storybook/react';

storiesOf('Grid.Props.Render', module)
  .add('render', withDocs(Render, () => <div />))
  .add('send', withDocs(Render, () => <div />))
  .add('current', withDocs(Render, () => <div />));
