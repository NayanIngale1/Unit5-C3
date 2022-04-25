import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";

export const Logout = () => {
  // log user out. it's just an inmemory value in context api

  const { handleAuth } = useContext(AuthContext);

  useEffect(() => {
    handleAuth(false);
  }, []);

  return (
    <>
      <p class="h1" style={{ margin: "40px auto" }}>
        Log Out SuccessFully
      </p>
    </>
  );
};
