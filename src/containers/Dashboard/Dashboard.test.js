import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from "./Dashboard";
import { UserContext } from "../../libs/userTypeContextLib";
import { AppContext } from "../../libs/contextLib";


it('renders correctly when there is a no data for invalid usertype', () => {
  const accesstype = "readonly";
  const addItem = jest.fn()
  const tree = renderer.create(
    <AppContext.Provider value={{ addItem }}>
      <UserContext.Provider value={{ userType: 'hi' }}>
        <Dashboard />
      </UserContext.Provider>)
    </AppContext.Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when there is a data for readonly usertype with no update permissions', () => {
  const accesstype = "readonly";
  const addItem = jest.fn()
  const tree = renderer.create(
    <AppContext.Provider value={{ addItem }}>
      <UserContext.Provider value={{ userType: 'readonly' }}>
        <Dashboard />
      </UserContext.Provider>)
    </AppContext.Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when there is a data for jira usertype with update permissions', () => {
  const accesstype = "readonly";
  const addItem = jest.fn()
  const tree = renderer.create(
    <AppContext.Provider value={{ addItem }}>
      <UserContext.Provider value={{ userType: 'jira' }}>
        <Dashboard />
      </UserContext.Provider>)
    </AppContext.Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when there is a data for admin usertype with update permissions', () => {
  const accesstype = "readonly";
  const addItem = jest.fn()
  const tree = renderer.create(
    <AppContext.Provider value={{ addItem }}>
      <UserContext.Provider value={{ userType: 'admin' }}>
        <Dashboard />
      </UserContext.Provider>
    </AppContext.Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when there is a data for admin usertype with updating the value', () => {
  const accesstype = "readonly";
  const addItem = jest.fn()
  const tree = renderer.create(
    <AppContext.Provider value={{ addItem }}>
      <UserContext.Provider value={{ userType: 'admin' }}>
        <Dashboard />
      </UserContext.Provider>
    </AppContext.Provider>);
  const checkbox = tree.root.findAllByType('input');
  renderer.act(checkbox[0].props.onChange);
  expect(tree).toMatchSnapshot();
});

it('renders correctly when we logout', () => {
  const accesstype = "readonly";
  const addItem = jest.fn()
  const tree = renderer.create(
    <AppContext.Provider value={{ addItem }}>
      <UserContext.Provider value={{ userType: 'admin' }}>
        <Dashboard />
      </UserContext.Provider>
    </AppContext.Provider>);
  const link = tree.root.findAllByType('a');
  renderer.act(() => { link[0].props.onClick });
  expect(tree).toMatchSnapshot();

});

