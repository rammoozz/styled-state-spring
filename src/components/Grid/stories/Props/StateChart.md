#### stateChart
# ⚠🚧⚠
```js
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
<Grid
    stateChart={stateChart}
    render={({send,current}) => {
        return (
          <div onClick={() => send('NEXT')}>{current.value}</div>
        );
    }}
/>  
```
