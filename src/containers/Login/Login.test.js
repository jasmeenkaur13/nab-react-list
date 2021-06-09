import React from 'react';
import renderer from 'react-test-renderer';
import Login from "./Login";
import { UserContext } from "../../libs/userTypeContextLib";
import { AppContext } from "../../libs/contextLib";

it('renders correctly initially', () => {
    const accesstype = jest.fn();
    const addItem = jest.fn();
    const tree = renderer.create(
        <AppContext.Provider value={{ addItem }}>
            <UserContext.Provider value={{ accesstype }}>
                <Login />
            </UserContext.Provider>)
    </AppContext.Provider>);
    expect(tree).toMatchSnapshot();
});



