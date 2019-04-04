import React from 'react';
import Introduction from './Introduction.md';
import GetStarted from './GetStarted.md';
import { withDocs } from 'storybook-readme';
import { storiesOf } from '@storybook/react';

storiesOf('- Welcome', module)
  .add('- Introduction -', withDocs(Introduction, () => <div />))
  .add('Get Started', withDocs(GetStarted, () => <div />));
