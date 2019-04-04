import React from 'react';

import Grid from '../../../../src/components/Grid/';

import { useState } from 'react';

const randomcolor = () => {
  return ('00000' + ((Math.random() * (1 << 24)) | 0).toString(16)).slice(-6);
};

const stateChart = {
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' },
    },

    active: {
      on: { TOGGLE: 'inactive' },
    },
  },
};
const A = ({ send }) => {
  return (
    <Grid
      onClick={() => send('TOGGLE')}
      springProps={{
        to: {
          left: '0px',
        },
        background: `#${randomcolor()}`,
        from: { background: `#${randomcolor()}`, height: '100%' },
      }}
      css={`
        height: 100%;
      `}
    >
      A
    </Grid>
  );
};

const B = ({ current, send }) => {
  return (
    <Grid
      onClick={() => send('TOGGLE')}
      springProps={{
        to: {
          left: '0px',
        },
        background: `#${randomcolor()}`,
        from: { background: `#${randomcolor()}`, height: '100%' },
      }}
      css={`
        height: 100%;
      `}
    >
      B
    </Grid>
  );
};

const C = ({ send }) => {
  return (
    <Grid
      onClick={() => send('TOGGLE')}
      springProps={{
        to: {
          left: '0px',
        },
        background: `#${randomcolor()}`,
        from: { background: `#${randomcolor()}`, height: '100%' },
      }}
      css={`
        height: 100%;
      `}
    >
      C
    </Grid>
  );
};

const State = () => {
  const [{ current, send }, setValue] = useState({
    current: { value: 'active' },
  });
  const { value } = current;

  const isClosed = value !== 'active';
  const isClosedAnim = {
    to: { gridTemplateColumns: '1fr 1fr 1fr' },
  };
  const isOpenAnim = {
    to: { gridTemplateColumns: '1fr 0.5fr 1fr' },
  };
  const springProps = {
    opacity: 0,
    background: `#${randomcolor()}`,
    from: { opacity: 1, background: `#${randomcolor()}` },
    ...(isClosed ? isClosedAnim : isOpenAnim),
  };
  return (
    <Grid
      onTransition={({ send, current, transition }) => {
        //Optional:
        // Call back to raise state to parent
        setValue({ current, send });
      }}
      springProps={springProps}
      stateChart={stateChart}
      css={`
        display: grid;
        width: 100%;
        height: 100%;
      `}
      render={({ send, current }) => {
        return (
          <React.Fragment>
            <A send={send} current={current} />
            <B send={send} current={current} />
            <C send={send} current={current} />
          </React.Fragment>
        );
      }}
    />
  );
};

export default State;

import { storiesOf } from '@storybook/react';

storiesOf('Examples', module).add('Columns', () => <State />);
