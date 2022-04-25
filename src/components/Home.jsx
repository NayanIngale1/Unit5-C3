import { useContext } from "react";
import { EmpManagementContext } from "../Context/EmpManagement";

export const Home = () => {
  // create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // thins to store in context api
  //   total: get from db,
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,// inc when a new user in created



  const { total,terminated, promoted, newemp } = useContext(EmpManagementContext);


  return (
    <>
      <h3 className="welcome h1 my-5">Welcome To employee management system</h3>
      <div className="home">
        <span className="h3">Stats</span>
        <div className="p-2 mt-4 mx-auto border w-50">
          Total Employees<span className="totalemp mx-5">{total}</span>
        </div>
        <div className="p-2 mt-4 mx-auto border w-50">
          Total Terminated:{" "}
          <span className="total_terminated mx-5">{terminated}</span>
        </div>
        <div className="p-2 mt-4 mx-auto border w-50">
          Total Promoted: <span className="total_promoted mx-5">{promoted}</span>
        </div>
        <div className="p-2 mt-4 mx-auto border w-50">
          Total New: <span className="total_new mx-5">{newemp}</span>
        </div>
      </div>
    </>
  );
};
