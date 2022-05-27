import React from "react";
import { useNavigate } from "react-router-dom";

const  MainViewDetails = ({ index }) => {
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <button onClick={() => navigate(`/schedule/${index + 1}`)}>
        Shift {index + 1} schedule
      </button>
    </div>
  );
}

export default MainViewDetails;
