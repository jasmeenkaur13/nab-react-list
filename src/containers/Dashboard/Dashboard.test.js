import React from 'react';
import renderer from 'react-test-renderer';
import { ListsOfData } from "./Dashboard.data"
import Dashboard from "./Dashboard"


it('renders correctly when there is a single item', () => {
    const tree = renderer.create(<Dashboard items={ListsOfData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
 