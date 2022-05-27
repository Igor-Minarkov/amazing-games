import React, { useState, useEffect, useContext, Fragment } from "react";
import { AppContext } from "../../context/AppContext";
import { useLocation } from "react-router-dom";
import "./Dashboard.css";
import DashboardDetails from "./dashboardDetails/DashboardDetails";

function Dashboard() {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);
  const [customData, setCustomData] = useState([]);
  const [setter, switchSetter] = useState(false);
  const { addData, presentersData, tablesData } = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    setTitle(title);
    setTitle("");
    switchData();
  }, [presentersData, tablesData, data]);

  const switchData = () => {
    if (location.pathname === "/presenters") {
      setData(presentersData);
      setCustomData(presentersData);
      switchSetter(true);
    } else {
      setData(tablesData);
      setCustomData(tablesData);
      switchSetter(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(title, customData, setter);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className="form">
        <div className="basic-flex input-wrapper">
          <input
            data-testid="custom-element"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
          />
          <div>
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
      <div>
        {data?.map((data) => {
          return (
            <DashboardDetails
              key={data.id}
              name={data.name}
              id={data.id}
              customData={customData}
              setter={setter}
            />
          );
        })}
      </div>
    </Fragment>
  );
}

export default Dashboard;
