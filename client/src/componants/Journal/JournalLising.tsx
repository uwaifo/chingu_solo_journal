import * as React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Container, Row, Col, Form } from "react-bootstrap";
import HeaderSection from "../Site/Header";
import { JournalEntry } from "./JournalEntry";
import { DELETE_JOURNAL } from "../../api/journal_entry_mutation";

//
interface Props {}
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

export const JournalListing = () => {
  const { loading, error, data } = useQuery(journalQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : </p>;

  const handleDelete = (e: any) => {
    //e.preventDefault()
    console.log(e);
  }; /*
  const deleteJournal = useMutation(DELETE_JOURNAL, {
    update(proxy, result) {

    }

  })
  */

  return (
    <>
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
                      <a
                        className="text-danger"
                        href={`/journal/${journal.id}`}
                        onClick={handleDelete}
                      >
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
