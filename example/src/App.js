import React, { Component } from "react";

import { Grid } from "styled-state-spring";

export default class App extends Component {
  render() {
    const springProps = {
      opacity: 1,
      from: { opacity: 0 }
    };
    return (
      <div>
        <Grid
          css={`
            background: tomato;
          `}
          springProps={springProps}
          render={props => {
            return <div>I'm Animating!</div>;
          }}
        />
      </div>
    );
  }
}
