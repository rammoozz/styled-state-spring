import React from 'react';
import { useMachine } from './useMachine';
import { Machine } from 'xstate';
import ComponentFactory from './ComponentFactory';
const MachineFactory = props => {
  const { stateChart, onTransition, ...rest } = props;
  const [current, send] = useMachine(Machine(stateChart), onTransition);
  return <ComponentFactory {...rest} current={current} send={send} />;
};

export default MachineFactory;
