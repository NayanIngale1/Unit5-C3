import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:8080/employee")
      .then((res) => res.json())
      .then((res) => setEmployees(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="list_container d-flex justify-content-evenly flex-wrap" style={{ maxWidth: "1200px",margin:"20px auto" }}>
      {/* On clicking this card anywhere, user goes to user details */}
      {employees.map((e) => (
        <Link to={`/employees/${e.id}`}>
          {" "}
          <div
            className="employee_card d-flex flex-column m-2 p-2"
            style={{ width: "250px" }}
          >
            <img
              className="employee_image"
              src={e.image}
              style={{ width: "100%" }}
            />
            <span className="employee_name">{e.employee_name}</span>
            <span className="employee_title">{e.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};
