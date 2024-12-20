import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.pageContainer}>
      <h1 className={css.heading}>404</h1>
      <p className={css.message}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className={css.link}>
        Go back to Home
      </Link>
    </div>
  );
}
