import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../src/components/Button';

describe('<Button />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Button title="Click Me" onPress={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
