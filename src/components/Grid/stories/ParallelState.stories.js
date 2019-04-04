import React from 'react';
import Grid from '../../../../src/components/Grid/';

const randomcolor = () => {
  return ('00000' + ((Math.random() * (1 << 24)) | 0).toString(16)).slice(-6);
};

const A = ({ current, send }) => {
  const isClosed = current.matches('sidebar.CLOSE');
  const isExpanded = current.matches('icons.EXPAND');
  const isExpandedInit = { from: { position: 'absolute' } };
  const expandAnim = {
    config: { duration: 250 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    ...(!isExpanded && !isClosed ? isExpandedInit : {}),
  };

  return (
    <Grid
      show={!isClosed}
      transitionProps={{
        config: { duration: 250 },
        from: { opacity: 0, left: -50 },
        enter: { opacity: 1, left: 0 },
        leave: { opacity: 0, left: -50 },
      }}
      css={`
        width: 200px;
        font-size: 50px;
        user-select: none;
        cursor: pointer;
        height: 100vh;
        position: absolute;
      `}
      gridArea={'A'}
    >
      <button onClick={() => send('EXPAND_ICONS')}>Toggle</button>
      <div>
        <Grid
          show={!isExpanded}
          transitionProps={expandAnim}
          onClick={() => send('EXPAND_ICONS')}
        >
          😀
        </Grid>
        <Grid
          show={isExpanded}
          transitionProps={expandAnim}
          onClick={() => send('EXPAND_ICONS')}
        >
          😊
        </Grid>
      </div>
    </Grid>
  );
};

const B = ({ current, send }) => {
  const isClosed = current.matches('sidebar.CLOSE');

  const isClosedAnim = {
    to: { marginLeft: 0 },
  };
  const isOpenAnim = {
    to: { marginLeft: 200 },
  };
  return (
    <Grid
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
      <button onClick={() => send('EXPAND_ICONS')}>Toggle Icon</button>
      <button onClick={() => send('TOGGLE_SIDEBAR')}>Toggle Side Bar</button>
    </Grid>
  );
};

class State extends React.Component {
  render() {
    const stateChart = {
      id: 'Page',
      type: 'parallel',
      states: {
        icons: {
          initial: 'COLLAPSE',
          states: {
            EXPAND: {
              on: {
                EXPAND_ICONS: 'COLLAPSE',
              },
            },
            COLLAPSE: {
              on: {
                EXPAND_ICONS: 'EXPAND',
              },
            },
          },
        },
        sidebar: {
          initial: 'CLOSE',
          states: {
            OPEN: {
              on: {
                TOGGLE_SIDEBAR: 'CLOSE',
              },
            },
            CLOSE: {
              on: {
                TOGGLE_SIDEBAR: 'OPEN',
              },
            },
          },
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
            cursor: pointer;
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

storiesOf('Examples', module).add('Parallel State', () => <State />);
