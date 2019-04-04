#### transitionProps
# ⚠🚧⚠
```js
const A = ({ current, send }) => {
  const isClosed = current && current.value === 'CLOSED';

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
      gridArea={'A'}>
      😀
    </Grid>
  );
};
```