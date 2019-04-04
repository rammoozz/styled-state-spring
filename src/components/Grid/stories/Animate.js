import React from 'react';

import Grid from '../../../../src/components/Grid/';

const randomcolor = () => {
  return ('00000' + ((Math.random() * (1 << 24)) | 0).toString(16)).slice(-6);
};

const A = () => {
  return (
    <Grid
      springProps={{
        left: '0%',
        background: `#${randomcolor()}`,
        from: {
          left: '-100%',
          background: `#${randomcolor()}`,
          position: 'absolute',
          height: '100%',
          width: '100%',
        },
        config: { duration: 1000 },
      }}
      css={`
        color:${randomcolor()}
      
        position: relative;
      `}
      gridTemplateAreas={`"A1 A2"`}
      gridArea={'A'}
    >
      A
    </Grid>
  );
};

const B = () => {
  return (
    <Grid
      springProps={{
        left: '0%',
        bottom: '0%',
        background: `#${randomcolor()}`,
        from: {
          bottom: '-100%',
          left: '100%',
          background: `#${randomcolor()}`,
          position: 'absolute',
          height: '100%',
          width: '100%',
        },
        config: { duration: 1000 },
      }}
      css={`
        color:${randomcolor()}
        position: relative;
      `}
      gridTemplateAreas={`"B1""B2"`}
      gridArea={'B'}
    >
      B
    </Grid>
  );
};

const C = () => {
  return (
    <Grid
      springProps={{
        left: '0%',
        bottom: '0%',
        background: `#${randomcolor()}`,
        from: {
          bottom: '100%',
          left: '100%',
          background: `#${randomcolor()}`,
          position: 'absolute',
          height: '100%',
          width: '100%',
        },
        config: { duration: 1000 },
      }}
      css={`
        color:${randomcolor()}
        position: relative;
      `}
      gridArea={'C'}
    >
      C
    </Grid>
  );
};
class Simple extends React.Component {
  render() {
    const springProps = {
      opacity: 1,
      from: { opacity: 0 },
      config: { duration: 3000 },
    };

    const gridTemplateAreas = `"A C"
    "A B"`;
    return (
      <React.Fragment>
        <Grid
          css={`
            height: 100%;
          `}
          springProps={springProps}
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
  }
}
export default Simple;
