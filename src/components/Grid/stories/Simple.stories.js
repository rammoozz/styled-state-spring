import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '../../../../src/components/Grid/';

const Simple = () => {
  const springProps = {
    opacity: 1,
    background: 'tomato',
    height: '100%',
    from: { opacity: 0, background: 'white', color: 'white', height: '0%' },
  };

  return (
    <React.Fragment>
      <Grid
        css={`
          height: 100%;
        `}
        springProps={springProps}
        render={props => {
          return (
            <React.Fragment>
              <div>I'm Animating!</div>
            </React.Fragment>
          );
        }}
      />
    </React.Fragment>
  );
};

export default Simple;

import { storiesOf } from '@storybook/react';

storiesOf('Examples', module).add('Simple', () => <Simple />);
