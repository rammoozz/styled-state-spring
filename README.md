# styled-state-spring

> A React library focused on State / Animation / Layout / Styles


[![NPM](https://img.shields.io/npm/v/styled-state-spring.svg)](https://www.npmjs.com/package/styled-state-spring) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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

## Usage
[Demo - Storybook](https://rkhayat.github.io/styled-state-spring/?path=/story/welcome--introduction)


 A simple example ([Codesandbox](https://codesandbox.io/s/6xoqpr5mnk)):

```jsx
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

## License

MIT © [rkhayat](https://github.com/rkhayat)


Thanks to [create-react-library](https://www.npmjs.com/package/create-react-library)!