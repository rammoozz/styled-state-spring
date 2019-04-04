import React from 'react';
import renderer from 'react-test-renderer';
import Grid from '../Grid';
test('it works', () => {
  const tree = renderer.create(<Grid />).toJSON();
  expect(tree).toMatchSnapshot();
});
