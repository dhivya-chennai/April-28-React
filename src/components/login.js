import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import '../styles/login.css'
import logImage from '../images/login.jpg'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
    if(validateForm()) {
      if(localStorage.getItem(email) === password)
        navigate("/dashboard")
      else {
        alert("Credentials mismatch, Please click Register")
      }
    } else {
      alert("Please enter details")
    }
  }
  function registerUser(event) {
    event.preventDefault();
    if(validateForm()) {
      if(!localStorage.getItem(email)) {
        localStorage.setItem(email, password);
        navigate("/dashboard")
      } else {
        alert("User already Registered")
      }
    } else {
      alert("Please enter details");
    }
  }
return (

<div className="Login d-flex justify-content-center align-items-center">
  <h3>Login Page &nbsp;</h3>
  <Form onSubmit={handleSubmit}>
  <Form.Group size="sm" controlId="email">
  <Form.Label>Email</Form.Label>
  <Form.Control
    autoFocus
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  </Form.Group>
  <Form.Group size="sm" controlId="password">
  <Form.Label>Password</Form.Label>
  <Form.Control
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  </Form.Group> <br/>
  <Button block size="lg" type="submit">
      Login
  </Button> 
  &nbsp;
  <Button block size="lg" type="submit" onClick={registerUser}>
      Register
  </Button>
</Form>

</div>

);

}