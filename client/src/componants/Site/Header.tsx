import React, { useState } from "react";
import { Button, Container, Row, Col, Form, Modal } from "react-bootstrap";
//
import { LoginForm } from "../User/LoginForm";
import { RegisterForm } from "../User/RegisterForm";

export const HeaderSection: React.FC = () => {
  //login modal
  const [loginShow, setLoginShow] = useState(false);
  const handleLoginClose = () => setLoginShow(false);
  const handleLoginShow = () => setLoginShow(true);
  //register modal
  const [registerShow, setRegisterShow] = useState(false);
  const handleRegisterClose = () => setRegisterShow(false);
  const handleRegisterShow = () => setRegisterShow(true);

  return (
    <>
      <nav className="navbar navbar-light navbar-expand-md">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <strong>Digital Journal</strong> | Create A Note
          </a>
          <button
            data-toggle="collapse"
            className="navbar-toggler"
            data-target="#navcol-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link text-primary"
                  href="#"
                  onClick={handleLoginShow}
                >
                  Log in
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link text-primary"
                  href="#"
                  onClick={handleRegisterShow}
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Modal show={loginShow} onHide={handleLoginClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={registerShow} onHide={handleRegisterClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegisterForm />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default HeaderSection;
/*
      <nav class="navbar navbar-light navbar-expand-md">
        <div class="container-fluid"><a class="navbar-brand" href="#"><strong>Digital Journal</strong> | Create A Note</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div
                class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item" role="presentation"><a class="nav-link text-primary" href="#">Log in</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link text-primary" href="#">Sign up</a></li>
                </ul>
        </div>
        </div>
    </nav>
*/
