import React from 'react';
import Grid from '../../../../src/components/Grid/';

const randomcolor = () => {
  return ('00000' + ((Math.random() * (1 << 24)) | 0).toString(16)).slice(-6);
};

const A = () => {
  return (
    <Grid
      css={`
        color: #${randomcolor()};
        background: #${randomcolor()};

        position: relative;
      `}
      gridTemplateAreas={`"A1 A2"`}
      gridArea={'A'}
    >
      <A1 />
      <A2 />
    </Grid>
  );
};
const A1 = () => {
  return (
    <Grid
      css={`
        color: #${randomcolor()};
        background: #${randomcolor()};
        position: relative;
      `}
      gridArea={'A1'}
    >
      A1
    </Grid>
  );
};
const A2 = () => {
  return (
    <Grid
      css={`
        color: #${randomcolor()};
        background: #${randomcolor()};
        position: relative;
      `}
      gridArea={'A2'}
    >
      A2
    </Grid>
  );
};
const B = () => {
  return (
    <Grid
      css={`
        color: #${randomcolor()};
        background: #${randomcolor()};
        position: relative;
      `}
      gridTemplateAreas={`"B1""B2"`}
      gridArea={'B'}
    >
      <B1 />
      <B2 />
    </Grid>
  );
};
const B1 = () => {
  return (
    <Grid
      css={`
        color: #${randomcolor()};
        background: #${randomcolor()};
        position: relative;
      `}
      gridArea={'B1'}
    >
      B1
    </Grid>
  );
};
const B2 = () => {
  return (
    <Grid
      css={`
        color: #${randomcolor()};
        background: #${randomcolor()};
        position: relative;
      `}
      gridArea={'B2'}
    >
      B2
    </Grid>
  );
};
const C = () => {
  return (
    <Grid
      css={`
        color: #${randomcolor()};
        background: #${randomcolor()};
        position: relative;
      `}
      gridArea={'C'}
    >
      C
    </Grid>
  );
};
const Template = () => {
  const springProps = {
    opacity: 1,
    transform: 'scale(1,1)',
    from: { opacity: 0, transform: 'scale(5.5,5.5)' },
  };

  const gridTemplateAreas = `"B C"
    "B A"`;
  return (
    <React.Fragment>
      <Grid
        css={`
          height: 100%;
        `}
        gridTemplateAreas={gridTemplateAreas}
        render={props => {
          return (
            <React.Fragment>
              <A />
              <B />
              <C />
            </React.Fragment>
          );
        }}
      />
    </React.Fragment>
  );
};

export default Template;

import { storiesOf } from '@storybook/react';

storiesOf('Examples', module).add('Template', () => <Template />);
