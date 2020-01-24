///
import "bootstrap/dist/css/bootstrap.css";
import { Formik } from "formik";
import * as React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { JournalEditor } from "../Journal/JournalEditor";
interface Values {
  title: string;
  body: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

export const JournalEntry: React.FC<Props> = ({ onSubmit }) => {
  return (
    <>
      <Formik
        initialValues={{ title: "", body: "" }}
        onSubmit={values => {
          onSubmit(values);
        }}
      >
        {({ values, handleChange, handleBlur }) => (
          <Container>
            <Form>
              <Form.Group controlId="title">
                <Form.Label>Title:</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Enter Title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Body:</Form.Label>

                <JournalEditor />
                <Form.Text className="text-muted">
                  Use the form above to create a post. Make sure you fill the
                  required title and body fields and then press submit.
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Container>
        )}
      </Formik>
    </>
  );
};

/*
 <Form.Control
                  as="textarea"
                  rows="3"
                  type="text"
                  name="body"
                  placeholder="Journal Entry"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.body}
                />

                */
