import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Container, Row, Col, Form } from "react-bootstrap";
import HeaderSection from "../Site/Header";
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
      <div className="container">
        <div className="row">
          {data.journals.map((journal: journalType) => (
            <div className="col-md-4" key={journal.id}>
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0">{journal.title}</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">{journal.body}</p>
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
            
              <div className="mb-3"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Journals;
/*
      

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
*/
