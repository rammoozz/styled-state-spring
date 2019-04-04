import React from 'react';

import Grid from '../../../../src/components/Grid/';
import { Button } from '@material-ui/core';
import { useState } from 'react';
const stateChart = {
  id: 'toggle',
  initial: 'welcome',
  states: {
    welcome: {
      on: { LOGIN: 'login' },
    },

    login: {
      on: { HOME: 'home', WELCOME: 'welcome' },
    },
    home: {
      on: { WELCOME: 'welcome' },
    },
  },
};

const Welcome = ({ send, current }) => {
  // TODO - proper leave animations spring
  const isHidden = current.value !== 'welcome';
  const isHiddenAnim = {
    to: { top: '-100%' },
  };
  return (
    <Grid
      css={`
        width: 500px;
        height: 100%;
        background: #4f4f4f;
        display: grid;
        padding: 10px;
        position: absolute;
      `}
      springProps={{
        from: {
          top: '-100%',
        },

        to: { top: '0%' },
        ...(isHidden && isHiddenAnim),
      }}
    >
      <Button
        color={'primary'}
        onClick={() => send('LOGIN')}
        variant={'contained'}
        fullWidth
        style={{ margin: 'auto' }}
      >
        Battle.net
      </Button>
    </Grid>
  );
};
const Login = ({ send, current }) => {
  // TODO - proper leave animations spring
  const isHidden = current.value !== 'login';
  const isHiddenAnimLeft = {
    to: { left: '-100%' },
  };

  const isHiddenAnimRight = {
    to: { right: '-100%' },
  };
  return (
    <Grid gridTemplateColumns={'auto auto'} css={``}>
      <Grid
        css={`
          width: 100%;
          height: 100%;
          background: #f44336;
          display: grid;
          padding: 10px;
        `}
        springProps={{
          from: {
            left: '-100%',
            position: 'absolute',
          },

          to: { left: '0%', position: 'relative' },
          ...(isHidden && isHiddenAnimLeft),
        }}
      >
        <Button
          color={'primary'}
          onClick={() => send('WELCOME')}
          variant={'contained'}
          fullWidth
          style={{ margin: 'auto' }}
        >
          Back
        </Button>
      </Grid>
      <Grid
        css={`
          width: 100%;
          height: 100%;
          background: #4caf50;
          display: grid;
          padding: 10px;
        `}
        springProps={{
          from: {
            right: '-100%',
            position: 'absolute',
          },

          to: { right: '0%', position: 'relative' },
          ...(isHidden && isHiddenAnimRight),
        }}
      >
        <Button
          color={'primary'}
          onClick={() => send('HOME')}
          variant={'contained'}
          fullWidth
          style={{ margin: 'auto' }}
        >
          Login
        </Button>
      </Grid>
    </Grid>
  );
};

const Home = ({ send, current }) => {
  // TODO - proper leave animations spring
  const isHidden = current.value !== 'home';
  const isHiddenAnim = {
    to: { bottom: '-100%' },
  };
  return (
    <Grid
      css={`
        width: 100%;
        height: 100%;
        background: #4f4f4f;
        display: grid;
        padding: 10px;
        position: absolute;
      `}
      springProps={{
        from: {
          bottom: '-100%',
        },

        to: { bottom: '0%' },
        ...(isHidden && isHiddenAnim),
      }}
    >
      <Button
        color={'primary'}
        onClick={() => send('WELCOME')}
        variant={'contained'}
        fullWidth
        style={{ margin: 'auto' }}
      >
        Logout
      </Button>
    </Grid>
  );
};
const State = () => {
  const [{ current, send }, setValue] = useState({
    current: { value: 'active' },
  });
  const { value } = current;

  const springProps = {
    opacity: 1,
    background: 'rgba(0,0,0,.3)',
    from: { opacity: 0 },
  };
  return (
    <Grid
      onTransition={({ send, current }) => {
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
            <Welcome send={send} current={current} />
            <Login send={send} current={current} />

            <Home send={send} current={current} />
          </React.Fragment>
        );
      }}
    />
  );
};

export default State;

import { storiesOf } from '@storybook/react';

storiesOf('Examples', module).add('Warcraft 3', () => <State />);
