import React from 'react';
import Grid from '../../../../src/components/Grid/';

const randomcolor = () => {
  return ('00000' + ((Math.random() * (1 << 24)) | 0).toString(16)).slice(-6);
};

const A = ({ current, send }) => {
  const isClosed = current && current.value === 'CLOSED';
  const isClosedAnim = {
    to: {
      left: '-200px',
    },
  };
  const springProps = {
    to: {
      left: '0px',
    },
    background: `#${randomcolor()}`,
    from: {
      background: `#${randomcolor()}`,
      position: 'absolute',
      height: '100%',
      width: '100%',
    },
    ...(isClosed && isClosedAnim),
  };
  return (
    <Grid
      onClick={() => send('NEXT')}
      springProps={springProps}
      css={`
        width: 200px;
        height: 100vh;
        position: absolute;
      `}
      gridArea={'A'}
    >
      Close
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
      onClick={() => send('NEXT')}
      springProps={{
        to: {
          left: '0%',
        },
        background: `#${randomcolor()}`,
        from: {
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

class State extends React.Component {
  render() {
    const stateChart = {
      initial: 'INITIAL',
      states: {
        INITIAL: {
          on: {
            NEXT: 'CLOSED',
          },
          onEntry: 'isInitial',
        },
        CLOSED: {
          on: {
            NEXT: 'INITIAL',
          },
          onEntry: 'isClosed',
        },
      },
    };
    const springProps = {
      opacity: 1,

      from: { opacity: 0 },
    };

    return (
      <React.Fragment>
        <Grid
          css={`
            height: 100%;
          `}
          springProps={springProps}
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
  }
}
export default State;

import { storiesOf } from '@storybook/react';

storiesOf('Examples', module).add('State', () => <State />);
