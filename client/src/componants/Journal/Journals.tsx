import * as React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Container, Row, Col, Form } from "react-bootstrap";
import HeaderSection from "../Site/Header";
import { JournalEntry } from "./JournalEntry";
import { JournalListing } from "./JournalLising";

export const Journals = () => {
  return (
    <>
      <HeaderSection />
      <JournalEntry />
      <JournalListing />
    </>
  );
};
