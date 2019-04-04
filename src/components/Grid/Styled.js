import { useSpring, useTransition, animated } from 'react-spring';
import styled, { css } from 'styled-components';

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
const Grid = styled.div`
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
export { AnimatedG, Grid };
