import React from 'react';
import { useTransition } from 'react-spring';
import { AnimatedG } from './Styled';
import isFunction from './isFunction';
function UseSpring({
  transitionProps,
  send,
  css,
  list,
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
  const transitions = useTransition(list, item => item.id, transitionProps);
  return transitions.map(
    ({ item, props: innerTransitionListProps, key }, index) => {
      return (
        <AnimatedG
          key={key}
          send={send}
          style={{ ...innerTransitionListProps }}
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
            ? render({ item, send, current, index, ...propsObj })
            : children}
        </AnimatedG>
      );
    }
  );
}

export default UseSpring;
