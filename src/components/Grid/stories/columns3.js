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
    foo: {
      on: { FOO: 'foo' },
    },
    active: {
      on: { TOGGLE: 'inactive', FOO: 'foo' },
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

  return (
    <Grid
      onTransition={({ send, current }) => {
        //Optional:
        // Call back to raise state to parent
        setValue({ current, send });
      }}
      gridTemplateColumns={
        value === 'inactive' ? '1fr 1fr 1fr' : '0.5fr 1fr 0.5fr'
      }
      stateChart={stateChart}
      css={`
        transition: all 0.2s ease;

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
