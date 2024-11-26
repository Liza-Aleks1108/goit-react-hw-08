import { Link } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={css.nav}>
      <Link to="/login" className={css.authLink}>
        Log in
      </Link>
      <Link to="/register" className={css.authLink}>
        Register
      </Link>
    </div>
  );
}
