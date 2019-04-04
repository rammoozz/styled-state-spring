import React from 'react';
import { useTransition } from 'react-spring';
import { AnimatedG } from './Styled';
import isFunction from './isFunction';
function UseSpring({
  transitionProps,
  show,
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
  const transitions = useTransition(show, null, transitionProps);
  return transitions.map(({ item, key, props: innerTransitionProps }) => {
    return (
      item && (
        <AnimatedG
          key={key}
          send={send}
          style={{ ...innerTransitionProps }}
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
      )
    );
  });
  return null;
}

export default UseSpring;
