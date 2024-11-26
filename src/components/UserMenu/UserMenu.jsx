import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/authSlice";

export default function UserMenu() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <span>Welcome, User!</span>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
