import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.appBar}>
      <div className={css.navWrapper}>
        <Navigation />
      </div>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
