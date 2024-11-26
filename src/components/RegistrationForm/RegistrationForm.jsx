import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css"; // Імпорт стилів

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Must be at least 3 characters long")
    .max(50, "Must be not longer than 50 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then(() => alert("User registered successfully"))
      .catch((err) => alert("Registration failed: " + err.message));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor="name">Name</label>
        <Field name="name" type="text" className={css.input} />
        <ErrorMessage name="name" component="div" className={css.error} />

        <label htmlFor="email">Email</label>
        <Field name="email" type="email" className={css.input} />
        <ErrorMessage name="email" component="div" className={css.error} />

        <label htmlFor="password">Password</label>
        <Field name="password" type="password" className={css.input} />
        <ErrorMessage name="password" component="div" className={css.error} />

        <button type="submit" className={css.button}>
          Register
        </button>
      </Form>
    </Formik>
  );
}
