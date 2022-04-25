import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const Login = () => {
  //  use reqres to log user in.
  const [user, setUser] = useState({});

  const { handleAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          handleAuth(true);
          navigate(-2, { replace: true });
        } else if (res.error) {
          alert("Incorrect Email Or Password");
        }
      });
  };

  return (
    <form
      className="loginform w-25 my-5 mx-auto d-flex flex-column"
      onSubmit={handleSubmit}
    >
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username my-2  p-2"
        onChange={handleChange}
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password my-2  p-2"
        onChange={handleChange}
      />
      <input
        type="submit"
        value="SIGN IN"
        className="login_submit my-2 p-2 btn btn-success"
      />
    </form>
  );
};
