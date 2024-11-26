import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("This field is required to fill!")
    .min(3, "Must be at least 3 characters long")
    .max(50, "Must be not longer than 50 characters"),
  number: Yup.string()
    .required("This field is required to fill!")
    .matches(/^\+?[0-9\s\-]+$/, "Invalid phone number format")
    .min(3, "Must be at least 3 characters long")
    .max(50, "Must be not longer than 50 characters"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

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
          const duplicate = contacts.find(
            (contact) =>
              contact.name.toLowerCase() === values.name.toLowerCase() &&
              contact.number === values.number
          );
          if (duplicate) {
            toast.error("This contact already exists!");
            actions.resetForm();
            return;
          }

          dispatch(addContact({ name: values.name, number: values.number }))
            .unwrap()
            .then(() => {
              toast.success("Contact added!");
            })
            .catch((err) => {
              toast.error(`${err.message}`);
            });
          actions.resetForm();
        }}
      >
        <Form className={css.contactForm}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field name="name" type="text" id={nameFieldId} />
          <ErrorMessage className={css.error} name="name" component="span" />

          <label htmlFor={numberFieldId}>Number</label>
          <Field name="number" type="text" id={numberFieldId} />
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
