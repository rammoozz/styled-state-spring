import React, { useState } from 'react';

import Grid from '../../../../src/components/Grid/';

const Simple = () => {
  const [isLoggedIn, toggleLogin] = useState(false);
  const logout = () => toggleLogin(false);
  const login = () => toggleLogin(true);
  return (
    <Grid
      springProps={{
        opacity: 1,
        left: 0,
        position: 'relative',
        from: { left: -50, position: 'absolute', opacity: 0 },
      }}
    >
      <Grid
        show={!isLoggedIn}
        transitionProps={{
          config: { duration: 250 },
          from: {
            top: 0,
            bottom: 0,
            opacity: 0,
            left: -100,

            position: 'absolute',
          },
          enter: { opacity: 1, left: 0, position: 'relative' },
          leave: {
            opacity: 0,
            left: -100,

            position: 'absolute',
          },
        }}
      >
        <button onClick={login}>login</button>
      </Grid>
      <Grid
        show={isLoggedIn}
        transitionProps={{
          position: 'relative',
          config: { duration: 250 },
          from: {
            top: 0,
            bottom: 0,
            opacity: 0,
            left: -100,

            position: 'absolute',
          },
          enter: { opacity: 1, left: 0, position: 'relative' },
          leave: {
            opacity: 0,
            left: -100,

            position: 'absolute',
          },
        }}
      >
        <button onClick={logout}>Logout</button>
      </Grid>
    </Grid>
  );
};

export default Simple;

import { storiesOf } from '@storybook/react';

storiesOf('Examples', module).add('Login', () => <Simple />);
