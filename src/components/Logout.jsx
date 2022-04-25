import { useContext } from "react";

export const Logout = () => {
  // log user out. it's just an inmemory value in context api


const {handleAuth}=useContext()


  return (
    <div>
      <p class="h1">Log Out SuccessFull</p>
    </div>
  );
};
