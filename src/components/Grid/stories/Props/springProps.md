#### springProps
# ⚠🚧⚠
```js
const springProps = {
    opacity: 1,
    background: 'tomato',
    height: '100%',
    from: { opacity: 0, background: 'white', color: 'white',height:'0%' },
};

<Grid
    css={`
        height: 100%;
    `}
    show
    springProps={springProps}
    render={props => {
        return (
            <div>I'm Animating!</div>
        );
    }}
/>
```
