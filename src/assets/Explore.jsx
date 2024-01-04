import React from "react";
import { useState } from "react";
import Male from "./Male";
import Female from "./Female";
import { Link } from "react-router-dom";
const Explore = () => {
  const [Gender, setGender] = useState(true);

  return (
    <div className="explore">
      <div className="content">
        <div className="gap">
          <div className="flex">
            <button
              className="button-89"
              role="button"
              onClick={() => setGender(true)}
            >
              Male
            </button>
            <button
              className="button-89"
              role="button"
              onClick={() => setGender(false)}
            >
              Female
            </button>
          </div>
          <Link to="/login" className="button-89">
            +
          </Link>
        </div>
        <div>{Gender ? <Male /> : <Female />}</div>
      </div>
    </div>
  );
};

export default Explore;
