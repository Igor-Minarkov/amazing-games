import React, { Fragment } from "react";
import "./TimeSlotsInfo.css";

const TimeSlots = ({ info, presenters, tables }) => {
  if (tables !== undefined && tables.length > 0) {
    presenters.forEach((presenter, i) => {
      if (tables.length > i) {
        presenter.currTable = tables[i].name;
      } else {
        presenter.currTable = "break";
      }
    });
  }

  return (
    <Fragment>
      {info.map((item, i) => {
        for (let i = 0; i + 1 < presenters.length; i++) {
          let bubbleTemp = presenters[i].currTable;
          presenters[i].currTable = presenters[i + 1].currTable;
          presenters[i + 1].currTable = bubbleTemp;
        }
        return (
          <div className="wrapper" key={item.id}>
            <div className="timeslots" key={item.id}>
              <p key={item.id}>{item.startDate + "-" + item.endDate}</p>
            </div>
            {presenters.map((presenter, i) => {
              return (
                <div className="current-table-wrapper" key={presenter.id}>
                  <p key={presenter.id}>{presenter.currTable}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </Fragment>
  );
};

export default TimeSlots;
