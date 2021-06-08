import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NabIcon from "../../images/logo.png"

import { useHistory } from "react-router-dom";
import "./Login.css";
import { useAppContext } from "../../libs/contextLib";
import { useUserContext } from "../../libs/userTypeContextLib";


export default function Login() {
  const { userHasAuthenticated } = useAppContext();
  const { setUserType } = useUserContext();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function loginUser(credentials) {
    return fetch('http://localhost:3030/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
  }

  function validateForm() {
    return userName.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const userType = await loginUser({
        userName: userName,
        password
      });
      userHasAuthenticated(true);
      setUserType(userType.accestype);
      history.push("/dashboard");
    } catch (e) {
      alert(e.message);
    }
  }


  return (
   
    <div className="Login">
       <div className="bar">
          <img src={NabIcon} style={{height:3 +'rem', width:7 + 'rem'}}/>
        </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="userName">
          <Form.Label>UserName</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}