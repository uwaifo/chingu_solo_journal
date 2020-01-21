import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Container, Row, Col, Form } from "react-bootstrap";
import HeaderSection from "./Header";
import { JournalEntry } from "./JournalEntry";

//
interface journalType {
  id: string;
  title: string;
  body: string;
  createdOn: number;
}

interface journalData {
  journalType: journalType[];
}
const journalQuery = gql`
  {
    journals {
      id
      title
      body
      createdOn
    }
  }
`;
export const Journals: React.FC = () => {
  const { loading, error, data } = useQuery(journalQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <HeaderSection />
      <JournalEntry onSubmit={() => {}} />
      <div>
        <p></p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">Lorem 8</h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                  justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                  id elit non mi porta gravida at eget metus.
                </p>
              </div>
              <div className="card-header">
                <div className="row">
                  <div className="col">
                    <a href="#">Edit</a>
                  </div>
                  <div className="col">
                    <a className="text-danger" href="#">
                      Delete
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">Lorem 3</h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                  justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                  id elit non mi porta gravida at eget metus.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">Lorem 1</h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                  justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                  id elit non mi porta gravida at eget metus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Journals;
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
