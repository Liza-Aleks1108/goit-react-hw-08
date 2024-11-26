import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";
import PhoneInputField from "../PhoneInput/PhoneInput";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("This field is required to fill!")
    .min(3, "Must be at least 3 characters long")
    .max(50, "Must be not longer than 50 characters"),
  number: Yup.string()
    .required("This field is required to fill!")
    .min(3, "must be at least 3 characters long")
    .max(50, "must be not longer than 50 characters"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <>
      <Formik
        initialValues={{
          id: "",
          name: "",
          number: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          dispatch(
            addContact({
              name: values.name,
              number: values.number,
            })
          )
            .unwrap()
            .then(() => {
              toast.success("Contact successfully added!");
            })
            .catch((err) => {
              toast.error(`${err.message}`);
            });
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field name="name" type="text" id={nameFieldId} />
          <ErrorMessage className={css.error} name="name" component="span" />

          <label htmlFor={numberFieldId}>Number</label>
          <Field
            name="number"
            type="text"
            id={numberFieldId}
            component={PhoneInputField}
          />
          <ErrorMessage className={css.error} name="number" component="span" />

          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
      <Toaster />
    </>
  );
}
