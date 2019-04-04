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
      <A1 />
      <A2 />
    </Grid>
  );
};
const A1 = () => {
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
      gridArea={'A1'}
    >
      A1
    </Grid>
  );
};
const A2 = () => {
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
      gridArea={'A2'}
    >
      A2
    </Grid>
  );
};
const B = () => {
  return (
    <Grid
      springProps={{
        left: '0%',
        background: `#${randomcolor()}`,
        from: {
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
      <B1 />
      <B2 />
    </Grid>
  );
};
const B1 = () => {
  return (
    <Grid
      springProps={{
        left: '0%',
        background: `#${randomcolor()}`,
        from: {
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
      gridArea={'B1'}
    >
      B1
    </Grid>
  );
};
const B2 = () => {
  return (
    <Grid
      springProps={{
        left: '0%',
        background: `#${randomcolor()}`,
        from: {
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
      gridArea={'B2'}
    >
      B2
    </Grid>
  );
};
const C = () => {
  return (
    <Grid
      springProps={{
        left: '0%',
        background: `#${randomcolor()}`,
        from: {
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
class Animate2 extends React.Component {
  render() {
    const stateChart = {
      initial: 'a',
      states: {
        a: {
          on: {
            NEXT: 'b',
          },
          onEntry: 'sayHello',
        },
        b: {
          on: {
            NEXT: 'a',
          },
          onEntry: 'sayCiao',
        },
      },
    };
    const springProps = {
      opacity: 1,
      transform: 'scale(1,1)',
      from: { opacity: 0, transform: 'scale(5.5,5.5)' },
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
          stateChart={stateChart}
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
export default Animate2;
