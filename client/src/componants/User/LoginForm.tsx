import React, { useState } from "react";
import { Button, Container, Row, Col, Form, Modal } from "react-bootstrap";
import { LOGIN_USER } from "../../api/login_mutation";
import { useMutation } from "@apollo/react-hooks";
export const LoginForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  //

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  ///form submit and validation
  const [validated, setValidated] = useState(false);
  const onSubmit = (e: any) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() == false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
    } else {
      //setValidated(true);
      loginUser();
    }
  };

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(proxy, result) {
      //console.log(result);
      window.location.href = "/";
    },
    variables: values
  });
  return (
    <>
      <Form onSubmit={onSubmit} noValidate validated={validated}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            name="email"
            value={values.email}
            type="email"
            placeholder="Enter email"
            onChange={onChange}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your email address
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            name="password"
            value={values.password}
            type="password"
            placeholder="Password"
            onChange={onChange}
          />
          <Form.Control.Feedback type="invalid">
            Please your password
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
};
