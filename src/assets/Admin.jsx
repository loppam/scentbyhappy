import React from "react";
import { useState } from "react";
import AddPerfume from "./Addperfumes";
import PerfumeList from "./PerfumeList";
import { Link } from "react-router-dom";
const Admin = () => {
  const [Role, setRole] = useState(true);

  return (
    <div className="admin">
      <div className="content">
        <div className="gap">
          <div className="flex">
            <button
              className="button-89"
              role="button"
              onClick={() => setRole(false)}
            >
              Delete
            </button>
            <button
              className="button-89"
              role="button"
              onClick={() => setRole(true)}
            >
              Add
            </button>
          </div>
        </div>
        <div>{Role ? <AddPerfume /> : <PerfumeList />}</div>
      </div>
    </div>
  );
};

export default Admin;
