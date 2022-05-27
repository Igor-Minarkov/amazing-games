import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [today, setToday] = useState("");

  const showCurrentDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    setToday(mm + "/" + dd + "/" + yyyy);
  };

  useEffect(() => {
    showCurrentDate();
  }, []);

  return (
    <div className="wrapper header-wrapper">
      <h1> Work schedule for {today}</h1>
      <span>
        <Link to="/presenters">Presenters</Link>
        <Link to="/tables">Tables</Link>
      </span>
    </div>
  );
};

export default Header;
