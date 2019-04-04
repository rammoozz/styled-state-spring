import React from 'react';
import { useSpring } from 'react-spring';
import { AnimatedG } from './Styled';
import isFunction from './isFunction';
function UseSpring({
  springProps,
  send,
  css,
  propsObj,
  isGrid,
  gridTemplateRows,
  gridTemplateColumns,
  render,
  gridTemplateAreas,
  gridArea,
  rest,
  current,
  children,
}) {
  const spring = useSpring(springProps);

  return (
    <AnimatedG
      send={send}
      style={{ ...spring }}
      css={css}
      isGrid={isGrid}
      gridTemplateRows={gridTemplateRows}
      gridTemplateColumns={gridTemplateColumns}
      gridTemplateAreas={gridTemplateAreas}
      gridArea={gridArea}
      {...propsObj}
      {...rest}
    >
      {render && isFunction(render)
        ? render({ send, current, ...propsObj })
        : children}
    </AnimatedG>
  );
}

export default UseSpring;
