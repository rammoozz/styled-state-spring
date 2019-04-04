import { useState, useMemo, useEffect } from 'react';
import { interpret } from 'xstate';

export function useMachine(machine, notifyTransition) {
  // Keep track of the current machine state
  const [current, setCurrent] = useState(machine.initialState);
  // Start the service (only once!)

  const service = useMemo(
    () =>
      interpret(machine)
        .onTransition(state => {
          // Update the current machine state when a transition occurs
          setCurrent(state);
        })
        .start(),
    []
  );
  const send = service.send;
  //
  // Stop the service when the component unmounts
  if (notifyTransition) {
    useEffect(() => {
      return notifyTransition({ send, current });
    }, [current]);
  }
  useEffect(() => {
    return () => service.stop();
  }, []);

  return [current, service.send];
}
