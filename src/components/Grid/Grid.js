import React from 'react';
import PropTypes from 'prop-types';
import MachineFactory from './MachineFactory';
import ComponentFactory from './ComponentFactory';

function Grid(props) {
  if (props.stateChart) {
    return <MachineFactory {...props} />;
  } else {
    return <ComponentFactory {...props} />;
  }
}

Grid.propTypes = {
  gridTemplateAreas: PropTypes.string,
  gridArea: PropTypes.string,
};

export default Grid;
