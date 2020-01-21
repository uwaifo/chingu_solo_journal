import * as React from "react";
import HeaderSection from "./Header";
import "bootstrap/dist/css/bootstrap.css";
 
export const LoginForm = () => {
  return (
    <>
      <HeaderSection />
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">Login Form</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form>
              <div className="form-group">
                <label>Email address</label>
                <input type="email" name="email" />
                <div className="invalid-feedback"> </div>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" placeholder="Password" />
                <div></div>
              </div>
              <button type="submit"></button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
