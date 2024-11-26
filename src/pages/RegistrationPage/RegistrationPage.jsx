import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";
import { Toaster } from "react-hot-toast";

export default function RegistrationPage() {
  return (
    <div className={css.pageContainer}>
      <h2 className={css.heading}>Create new account right now</h2>
      <RegistrationForm />
      <Toaster className={css.toaster} />
    </div>
  );
}
