import React, { useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import NabIcon from "../../images/logo.png"
import { useAppContext } from "../../libs/contextLib";
import { useUserContext } from "../../libs/userTypeContextLib";
import { useHistory } from "react-router-dom";
import {
    StyledUnorderedList, StyledListContainer, StyledLabel,
    StyledCheckBox, StyledListContainerHeading, StyledNavigationLink,
    StyledImage
} from "./Dashboard.style"

const ListsOfData = [{
    id: 1,
    Name: "Jasmeen",
    Age: 32,
    RequestedAccess: "jira",
    RequestedAccessName: "JIRA",
    ApprovedBy: "Jatin",
    markCompleted: false,
},
{
    id: 2,
    Name: "Hridaye",
    Age: 32,
    RequestedAccess: "confluence",
    RequestedAccessName: "Confluence",
    ApprovedBy: "Jatin",
    markCompleted: true,
},
{
    id: 3,
    Name: "Hanaaya",
    Age: 32,
    RequestedAccess: "payadvice",
    RequestedAccessName: "Pay Advice",
    ApprovedBy: "Mark",
    markCompleted: false,
},
{
    id: 4,
    Name: "Scott",
    Age: 34,
    RequestedAccess: "jira",
    RequestedAccessName: "JIRA",
    ApprovedBy: "Mark",
    markCompleted: false,
}];

export default function Dashboard() {
    const { userHasAuthenticated } = useAppContext();
    const { userType } = useUserContext();
    const [list, setList] = useState(ListsOfData);


    const history = useHistory();

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

    function handleLogout() {
        userHasAuthenticated(false);
        history.push("/");

    }

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