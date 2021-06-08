import React, { useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import NabIcon from "../../images/logo.png"
import { useAppContext } from "../../libs/contextLib";
import { useUserContext } from "../../libs/userTypeContextLib";
import { useHistory } from "react-router-dom";
import { ListsOfData } from "./Dashboard.data"
import {
    StyledUnorderedList, StyledListContainer, StyledLabel,
    StyledCheckBox, StyledListContainerHeading, StyledNavigationLink,
    StyledImage
} from "./Dashboard.style"



/**
 * The method is responsible for creating a react component which will aceept the data
 * and perfoms following function as a component
 * 1. Logout the use from Navigation bar
 * 2. Show the list of user according to the access on the request
 * 3. Allow them to complete if they have specific access.
 * @returns the List of data according to the accessType and a navigation bar
 */
export default function Dashboard() {
    const { userHasAuthenticated } = useAppContext();
    const { userType } = useUserContext();
    const [list, setList] = useState(ListsOfData);


    const history = useHistory();
    /**
     * Change the status of the request
     */
    const handleChangeCheckbox = id => {
        setList(
            list.map(item => {
                if (item.id === id) {
                    return { ...item, markCompleted: !item.markCompleted };
                } else {
                    return item;
                }
            })
        );
    };

    /**
     * set the userAuthention and reroute to the login page
     */
    function handleLogout() {
        userHasAuthenticated(false);
        history.push("/");

    }

    /**
     * Filtering of the list according to the usertype
     */
    const listItems = (
        list.map((item, index) => {
            if (userType === 'admin' || userType === item.RequestedAccess) {
                return (
                    <li key={'list-' + index}>
                        <StyledListContainer key={'list-' + index}>
                            <StyledLabel>{item.Name}</StyledLabel>
                            <StyledLabel>{item.Age}</StyledLabel>
                            <StyledLabel>{item.ApprovedBy}</StyledLabel>
                            <StyledLabel>{item.RequestedAccessName}</StyledLabel>
                            <StyledCheckBox label={item.markCompleted ? "Completed" : "Incomplete"}
                                checked={item.markCompleted}
                                disabled={item.markCompleted}
                                onChange={() => handleChangeCheckbox(item.id)} />
                        </StyledListContainer>
                    </li>)
            }
            if (userType === 'readonly') {
                return (
                    <li key={'list-' + index}>
                        <StyledListContainer key={'list-' + index}>
                            <StyledLabel>{item.Name}</StyledLabel>
                            <StyledLabel>{item.Age}</StyledLabel>
                            <StyledLabel>{item.ApprovedBy}</StyledLabel>
                            <StyledLabel>{item.RequestedAccessName}</StyledLabel>
                            <StyledLabel isLast='true'>{item.markCompleted ? "Completed" : "Incomplete"}</StyledLabel>
                        </StyledListContainer>
                    </li>)
            }
        }));
    return (
        <div>
            <Navbar collapseOnSelect bg="dark" expand="md" className="mb-3">
                <Navbar.Brand className="font-weight-bold text-muted">
                    <StyledImage src={NabIcon} />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <StyledNavigationLink onClick={handleLogout}>Logout</StyledNavigationLink>
                </Navbar.Collapse>
            </Navbar>
            <h2>Dashboard</h2>
            <StyledListContainerHeading key={'list-heading'}>
                <StyledLabel>Name</StyledLabel>
                <StyledLabel>Age</StyledLabel>
                <StyledLabel>Approved By</StyledLabel>
                <StyledLabel>Requested Access</StyledLabel>
                <StyledLabel isLast='true'>Completed</StyledLabel>
            </StyledListContainerHeading>
            <StyledUnorderedList id='data'>{listItems}</StyledUnorderedList>
        </div>
    );
}