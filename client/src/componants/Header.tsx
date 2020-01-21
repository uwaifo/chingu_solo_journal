import * as React from "react";

import { Container, Row, Col, Form } from "react-bootstrap";

export const HeaderSection = () => {
  return (
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
              <a className="nav-link text-primary" href="/login">
                Log in
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link text-primary" href="/register">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
