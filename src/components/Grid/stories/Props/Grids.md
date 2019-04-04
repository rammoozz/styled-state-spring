#### gridTemplateAreas
# ⚠🚧⚠
```js
const gridTemplateAreas = `"B C"
    "B A"`;
<Grid
    gridTemplateAreas={gridTemplateAreas}
    render={props => {
        return (
             <Grid gridArea={"A"}/>
             <Grid gridArea={"B"}/>
             <Grid gridArea={"C"}/>
        );
    }}
/>
```