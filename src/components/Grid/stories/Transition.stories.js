import React from 'react';
import Grid from '../../../../src/components/Grid/';

const randomcolor = () => {
  return ('00000' + ((Math.random() * (1 << 24)) | 0).toString(16)).slice(-6);
};

const A = ({ current, send }) => {
  const isClosed = current && current.value === 'CLOSED';

  return (
    <Grid
      show={!isClosed}
      transitionProps={{
        config: { duration: 250 },
        from: {
          top: 0,
          bottom: 0,
          opacity: 0,
          left: -100,
          transform: 'scale(1)',
        },
        enter: { opacity: 1, left: 80, transform: 'scale(2)' },
        leave: { opacity: 0, left: -100, transform: 'scale(1)' },
      }}
      css={`
        width: 200px;
        position: relative;
        width: 100px;
        margin: auto;
        font-size: 50px;
        user-select: none;
        display: flex;
        align-items: center;
        cursor: pointer;

        position: absolute;
      `}
      gridArea={'A'}
    >
      😀😀😀😀😀😀😀
    </Grid>
  );
};

const B = ({ current, send }) => {
  const isClosed = current && current.value === 'CLOSED';

  const isClosedAnim = {
    to: { marginLeft: 0 },
  };
  const isOpenAnim = {
    to: { marginLeft: 200 },
  };
  return (
    <Grid
      onClick={isClosed ? () => send('OPEN') : () => send('CLOSE')}
      springProps={{
        to: {
          left: '0%',
        },
        background: `#${randomcolor()}`,
        from: {
          marginLeft: 300,
          background: `#${randomcolor()}`,
          position: 'absolute',
          height: '100%',
          width: '100%',
        },

        ...(isClosed ? isClosedAnim : isOpenAnim),
      }}
      css={``}
      gridArea={'B'}
    >
      Open
    </Grid>
  );
};

const State = () => {
  const stateChart = {
    initial: 'OPEN',
    states: {
      EXPANDED: {
        on: {
          COLLAPSE: 'COLLAPSED',
        },
      },
      COLLAPSED: {
        on: {
          EXPAND: 'EXPANDED',
        },
      },
      CLOSED: {
        on: {
          OPEN: 'OPEN',
          COLLAPSE: 'COLLAPSED',

          EXPAND: 'EXPANDED',
        },
      },
      OPEN: {
        on: {
          CLOSE: 'CLOSED',
          COLLAPSE: 'COLLAPSED',
          EXPAND: 'EXPANDED',
        },
      },
    },
  };

  return (
    <React.Fragment>
      <Grid
        css={`
          height: 100%;
        `}
        stateChart={stateChart}
        render={({ send, current }) => {
          return (
            <React.Fragment>
              <A send={send} current={current} />
              <B send={send} current={current} />
            </React.Fragment>
          );
        }}
      />
    </React.Fragment>
  );
};

export default State;

import { storiesOf } from '@storybook/react';

storiesOf('Examples', module).add('Spring Transition', () => <State />);
