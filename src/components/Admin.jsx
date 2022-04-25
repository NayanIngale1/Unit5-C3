import { useContext, useState } from "react";
import { EmpManagementContext } from "../Context/EmpManagement";

export const Admin = () => {
  const [emp, setEmp] = useState({});

  const { handleNew } = useContext(EmpManagementContext);

  const handleChange = (e) => {
    if (e.target.name === "tasks") {
      let arr = e.target.value.split(",");
      // console.log("arr:", arr);
      setEmp({
        ...emp,
        [e.target.name]: arr,
      });
    } else {
      setEmp({
        ...emp,

        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(emp);
    fetch("http://localhost:8080/employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emp),
    });

    handleNew();
  };

  return (
    <form
      className="createEmployee border p-4"
      style={{ width: "500px", margin: "20px auto" }}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Employee Name"
        name="employee_name"
        className="form-control mb-3 p-2"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Employee id"
        name="employee_id"
        className="form-control mb-3 p-2"
        onChange={handleChange}
      />
      <select
        name="title"
        className="form-select mb-3 p-2"
        onChange={handleChange}
      >
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select>
      <input
        type="number"
        placeholder="Salary"
        name="salary"
        className="form-control mb-3 p-2"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Image"
        name="image"
        className="form-control mb-3 p-2"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="User Name"
        name="username"
        className="form-control mb-3 p-2"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        className="form-control mb-3 p-2"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
        className="form-control mb-3 p-2"
        onChange={handleChange}
      />
      <select
        name="status"
        id="status"
        className="form-select mb-3 p-2"
        onChange={handleChange}
      >
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>
      <select
        name="team"
        id="team"
        className="form-select mb-3 p-2"
        onChange={handleChange}
      >
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>
      <input
        className="createUser btn btn-success w-100"
        type="submit"
        value={"submit"}
      />
    </form>
  );
};
