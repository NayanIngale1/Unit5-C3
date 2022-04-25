import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EmpManagementContext } from "../Context/EmpManagement";

export const EmployeeDetails = () => {
  const [employee, setEmployee] = useState([]);
  const { handleTerminate, handlePromote } = useContext(EmpManagementContext)
  

  const { id } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(`http://localhost:8080/employee/${id}`)
      .then((res) => res.json())
      .then((res) => setEmployee(res))
      .catch((err) => console.log(err));
  };

  const handlePromotion = () => {
    if (employee.title.toLowerCase() === "intern") {
      setEmployee({
        ...employee,
        title: "Jr Software Developer",
      });
    } else if (employee.title.toLowerCase() === "jr software developer") {
      setEmployee({
        ...employee,
        title: "Sr Software Developer",
      });
    } else if (employee.title.toLowerCase() === "sr software developer") {
      setEmployee({
        ...employee,
        title: "Team Lead",
      });
    }

    handlePromote();
  };

  const handletermination = () => {
    setEmployee({
      ...employee,
      status: "terminated",
    });
    handleTerminate();

  };

  return (
    <div className="card" style={{ width: "350px", margin: "20px auto" }}>
      <div className="user_details card-body">
        <img className="user_image card-img-top" src={employee.image} />
        <h4 className="user_name">{employee.employee_name}</h4>
        <span className="user_salary d-block p-1">$ {employee.salary}</span>
        <span className="tasks d-block p-1">
          {/* {console.log(employee.tasks)} */}

          {employee.tasks === undefined ? (
            <li className="task">{employee.tasks}</li>
          ) : (
            employee.tasks.map((d) => <li className="task">{d}</li>)
          )}
        </span>
        Status: <b className="status d-block p-1">{employee.status}</b>
        Title: <b className="title d-block p-1">{employee.title}</b>
        {/* Show this button only if user is not already terminated (users status is working) */}
        {employee.status !== "terminated" ? (
          <button className="fire my-1 w-100 btn btn-danger" onClick={handletermination}>
            Fire Employee
          </button>
        ) : null}
        {/* Show this button only if user is not already team lead or terminated */}

        {(employee.title !== "Team Lead") ? (employee.status !== "terminated" ) ? (
          <button className="promote my-2 w-100 btn btn-success" onClick={handlePromotion}>
            promote
          </button>
        ) : null : null}
      </div>
    </div>
  );
};
