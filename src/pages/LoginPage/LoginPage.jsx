import css from "./LoginPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className={css.pageContainer}>
      <h2 className={css.heading}>Log in</h2>
      <LoginForm />
      <p className={css.paragraph}>
        or{" "}
        <Link to="/register" className={css.link}>
          Register account
        </Link>
      </p>
      <Toaster className={css.toaster} />
    </div>
  );
}
