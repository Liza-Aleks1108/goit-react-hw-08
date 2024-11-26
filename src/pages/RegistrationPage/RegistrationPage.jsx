import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";
import { Toaster } from "react-hot-toast";

export default function RegistrationPage() {
  return (
    <>
      <h2>Create new account right now</h2>
      <RegistrationForm />
      <Toaster />
    </>
  );
}
