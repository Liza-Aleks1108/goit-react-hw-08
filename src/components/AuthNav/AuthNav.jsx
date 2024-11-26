import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={css.nav}>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? `${css.authLink} ${css.active}` : css.authLink
        }
      >
        Log in
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? `${css.authLink} ${css.active}` : css.authLink
        }
      >
        Register
      </NavLink>
    </div>
  );
}
