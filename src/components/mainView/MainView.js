import React from "react";
import "./MainView.css";
import Header from "./header/Header";
import MainViewDetails from "./mainViewDetails/MainViewDetails";

const MainView = () => {
  return (
    <div className="main-view-wrapper">
      <Header />
      <div className="wrapper">
        {[...Array(3)].map((el, i) => (
          <MainViewDetails key={i} index={i} />
        ))}
      </div>
    </div>
  );
};

export default MainView;
