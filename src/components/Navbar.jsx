import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const Navbar = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <div className="navbar d-flex justify-content-evenly h-10 p-3 mb-2 bg-secondary text-white">
      <Link className="nav-home btn btn-outline-light" to="/">
        Home
      </Link>
      <Link className="nav-list btn btn-outline-light" to="/employees">
        Employee List
      </Link>
      <Link className="nav-admin btn btn-outline-light" to="/admin">
        Admin
      </Link>

      {/* Show Either logout or login based on auth context. DO NOT show both */}

      {isAuth ? (
        <Link className="nav-logout btn btn-outline-light" to="/logout">
          Logout
        </Link>
      ) : (
        <Link className="nav-login btn btn-outline-light" to="/login">
          Login
        </Link>
      )}
    </div>
  );
};
