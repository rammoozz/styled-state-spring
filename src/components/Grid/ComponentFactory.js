import React from 'react';
import UseTransitionList from './UseTransitionList';
import UseTransition from './UseTransition';
import UseSpring from './UseSpring';
import isFunction from '../../utils/isFunction';
import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import PropTypes from 'prop-types';

const AnimatedG = styled(animated.div)`
  grid-area: ${p => p.gridArea};
  grid-template-areas: ${p => p.gridTemplateAreas};
  grid-template-columns: ${p => p.gridTemplateColumns};
  grid-template-rows: ${p => p.gridTemplateRows};
  ${p =>
    p.isGrid &&
    css`
      display: grid;
    `}
  ${p => p.css};
`;
const G = styled.div`
  grid-area: ${p => p.gridArea};
  grid-template-areas: ${p => p.gridTemplateAreas};
  grid-template-columns: ${p => p.gridTemplateColumns};
  grid-template-rows: ${p => p.gridTemplateRows};
  ${p =>
    p.isGrid &&
    css`
      display: grid;
    `}
  ${p => p.css};
`;
const ComponentFactory = props => {
  const {
    css,
    transitionProps,
    send,
    current,
    springProps,
    render,
    show,
    children,
    list,
    gridArea,
    gridTemplateColumns,
    gridTemplateRows,
    gridTemplateAreas,
    ...rest
  } = props;
  const isGrid = gridTemplateRows || gridTemplateColumns || gridTemplateAreas;
  if (springProps) {
    return (
      <UseSpring
        springProps={springProps}
        propsObj={props}
        send={send}
        css={css}
        current={current}
        isGrid={isGrid}
        gridTemplateRows={gridTemplateRows}
        gridTemplateColumns={gridTemplateColumns}
        gridTemplateAreas={gridTemplateAreas}
        gridArea={gridArea}
        render={render}
        {...rest}
      >
        {children}
      </UseSpring>
    );
  } else if (transitionProps) {
    // If list
    if (list) {
      return (
        <UseTransitionList
          send={send}
          transitionProps={transitionProps}
          render={render}
          css={css}
          isGrid={isGrid}
          current={current}
          propsObj={props}
          list={list}
          gridTemplateRows={gridTemplateRows}
          gridTemplateColumns={gridTemplateColumns}
          gridTemplateAreas={gridTemplateAreas}
          gridArea={gridArea}
          {...rest}
        >
          {children}
        </UseTransitionList>
      );
    } else {
      // If Toggle Single
      return (
        <UseTransition
          show={show}
          transitionProps={transitionProps}
          css={css}
          propsObj={props}
          current={current}
          send={send}
          isGrid={isGrid}
          gridTemplateRows={gridTemplateRows}
          render={render}
          gridTemplateColumns={gridTemplateColumns}
          gridTemplateAreas={gridTemplateAreas}
          gridArea={gridArea}
          {...rest}
        >
          {children}
        </UseTransition>
      );
    }
  } else {
    return (
      <G
        send={send}
        css={css}
        isGrid={isGrid}
        gridTemplateRows={gridTemplateRows}
        gridTemplateColumns={gridTemplateColumns}
        gridTemplateAreas={gridTemplateAreas}
        gridArea={gridArea}
        {...rest}
      >
        {props.render && isFunction(render)
          ? props.render({ send, current, ...props })
          : children}
      </G>
    );
  }
};

G.propTypes = {
  gridTemplateAreas: PropTypes.string,
  gridArea: PropTypes.string,
};

export { AnimatedG, G };

export default ComponentFactory;
