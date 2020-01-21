///
import "bootstrap/dist/css/bootstrap.css";
import { Formik } from "formik";
import * as React from "react";
import { Button, Container, Form } from "react-bootstrap";
//import {} from "bootstrap"

interface Values {
  title: string;
  body: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

export const JournalEntry: React.FC<Props> = ({ onSubmit }) => {
  return (
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
              <Form.Text className="text-muted" >
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="body">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="textarea"
                name="body"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.body}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Container>
      )}

      
    </Formik>
  );
};
