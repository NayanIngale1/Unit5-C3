import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export const EmpManagementContext = createContext();

export const EmpmanagementContextProvider = ({ children }) => {
  const [total, setTotal] = useState(null);

  const [terminated, setTerminated] = useState(0);

  const [promoted, setPromoted] = useState(0);

  const [newemp, setNewemp] = useState(0);

  const handleTerminate = () => {
    setTerminated(terminated + 1);
  };
  const handlePromote = () => {
    setPromoted(promoted + 1);
  };
  const handleNew = () => {
    setNewemp(newemp + 1);
    setTotal(total + 1);
  };

  useEffect(() => {
    fetch(" http://localhost:8080/employee")
      .then((res) => res.json())
      .then(
        (res) => setTotal(res.length)
        // console.log()
      );
  }, []);

  return (
    <EmpManagementContext.Provider
      value={{
        terminated,
        promoted,
        newemp,
        total,
        handleTerminate,
        handlePromote,
        handleNew,
      }}
    >
      {children}
    </EmpManagementContext.Provider>
  );
};
