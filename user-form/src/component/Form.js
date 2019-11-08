import React from "react";

import { Form, Button, Input } from "formik-semantic-ui";
import { Container } from "semantic-ui-react";
import { withFormik } from 'formik';
import * as Yup from "yup";


function pageForm({ errors, touch }) {


  return (
    <Container style={{ marginTop: "15%" }}>
      <Form success>
        <Form.Input
          // error={errors.firstName && <p>{errors.firstName}</p>}
          fluid
          label="First name"
          placeholder="First name"
          name="firstName"
        />
        <Form.Input
          fluid
          label="Last Name"
          placeholder="Last Name"
          name="lastName"
        />
        <Form.Group widths="equal">
          <Form.Input
            type="email"
            fluid
            label="Email"
            placeholder="Email"
            name="email"
          />
          <Form.Input
            type="password"
            fluid
            label="Password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <Form.Checkbox
          label="I agree to the Terms and Conditions"
            // error={{
            //   content: "You must agree to the terms and conditions",
            //   pointing: "left"
            // }}
        />
        <Button.Submit>Submit</Button.Submit>
        {/* <Button.Reset>Cancel</Button.Reset> */}
      </Form>
    </Container>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({firstName, lastName, email, password}) {
    return{
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      password: password || "",
    }
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(6)
      .required
  }),

  handleSubmit(values){
    console.log(values)
  }

})(pageForm)

export default FormikLoginForm