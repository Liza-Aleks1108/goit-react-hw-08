import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1>Welcome to Our Contact List Manager!</h1>
      <p>
        To access and manage your contact list, please register or log in to
        your account. Registration is quick and easy, and it ensures your data
        remains secure. Already have an account? Click{" "}
        <Link to="/login" className={css.homePageLink}>
          log in
        </Link>{" "}
        to continue. New here? Click{" "}
        <Link to="/register" className={css.homePageLink}>
          register
        </Link>{" "}
        to join us today! Your personalized and secure contact list awaits!
      </p>
    </div>
  );
}
