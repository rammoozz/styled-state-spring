## Install

```bash
npm install --save styled-state-spring
```

`styled-state-spring` depends on:

  - react > 16.8 (hooks)
  - styled-components
  - xstate
  - react-spring

`styled-state-spring` has been tested with:

```js
 "react": ">= 16.8.0",
 "react-spring": ">= 8.0.11",
 "styled-components": ">= 4.1.0",
 "xstate": ">= 4.3.3"
```

```bash
npm install styled-components xstate react-spring
```

### A simple example:
```js
import React from 'react';
import { Grid } from 'styled-state-spring';

const App = () => {
  const springProps = {
    opacity: 1,
    from: { opacity: 0 },
  };

  return (
    <Grid
        css={`background:tomato;`}
        springProps={springProps}
        render={props => {
          return (
              <div>I'm Animating!</div>
          );
        }}
      />
  );
}

export default App;

```

