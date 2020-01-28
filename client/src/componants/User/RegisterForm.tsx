import React, { useState, useRef } from "react";
import { Button, Container, Row, Col, Form, Modal } from "react-bootstrap";
import { useMutation } from "@apollo/react-hooks";
//import { gql } from "apollo-boost";
import { REGISTER_USER } from "../../api/register_mutation";

export const RegisterForm = (props: any) => {
  //const [errors, setErrors] = useState({});

  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmpassword: ""
  });

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
    }
    setValidated(true);
    //console.log({ values });
    addUser();
  };

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, result) {
      //console.log(result);
      //props.history.push('/');
      window.location.href = "/";
    },
    onError(err) {
      //setErrors(err.graphQLErrors[0].extensions.exception.errors)
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
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please enter your password
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicPasswordConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            name="confirmpassword"
            value={values.confirmpassword}
            type="password"
            placeholder="Confirm Password"
            onChange={onChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please confirm your password
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </>
  );
};

/*

<Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
        <Row>

          */
