import React, { Fragment } from "react";
import "./PresentersView.css";

const PresenterView = ({ presenters }) => {
  return (
    <Fragment>
      <div className="wrapper">
        <div className="main-title">
          <p>
            <strong>Presenters</strong>
          </p>
        </div>
        {presenters.map((presenter, i) => {
          return (
            <div key={presenter.id} className="presenters">
              {presenter.name}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default PresenterView;
