import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import TimeSlots from "./timeSlotsInfo/TimeSlotsInfo";
import PresenterView from "./presentersView/PresentersView";
import uuid from "react-uuid";
import "./Schedule.css";

const Schedule = () => {
  let { shiftId } = useParams();
  const [timeSlots, setTimeSlots] = useState([]);
  const [presenters, setPresenters] = useState([]);
  const { presentersData, tablesData } = useContext(AppContext);

  const presentersRoasting = () => {
    if (presentersData) {
      const itemsNumber = Math.ceil(presentersData.length / 3);

      const result = new Array(3)

        .fill("")
        .map((_, i) =>
          presentersData.slice(i * itemsNumber, (i + 1) * itemsNumber)
        );

      parseInt(shiftId) === 1 && setPresenters(result[0]);
      parseInt(shiftId) === 2 && setPresenters(result[1]);
      parseInt(shiftId) === 3 && setPresenters(result[2]);
    }
  };

  const calculateMinutes = () => {
    var time = [];
    let timeSlotsArray = [];
    setTimeSlots(timeSlotsArray);
    var hours, minutes, ampm;
    for (var i = 0; i <= 1440; i += 20) {
      hours = Math.floor(i / 60);
      minutes = i % 60;
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      ampm = hours % 24 < 12 ? "am" : "pm";
      hours = hours % 12;
      if (hours === 0) {
        hours = 12;
      }
      time.push(hours + ":" + minutes + " " + ampm);
    }
    for (var index = 0; index <= time.length; index++) {
      timeSlotsArray.push({
        startDate: time[index],
        endDate: time[index + 1],
        id: uuid(),
      });
    }
    timeSlotsArray.splice(timeSlotsArray.length - 2, 2);
    setShifts(timeSlotsArray);
  };

  const setShifts = (arr) => {
    parseInt(shiftId) === 1 && arr.splice(0, 24);
    parseInt(shiftId) === 1 && arr.splice(24, 24);
    parseInt(shiftId) === 2 && arr.splice(0, 48);
    parseInt(shiftId) === 3 && arr.splice(24, 48);
  };

  useEffect(() => {
    calculateMinutes();
    presentersRoasting();
  }, []);

  return (
    <div className="detailed-view-wrapper">
      <h1> Shift number {shiftId} </h1>
      <div data-testid="parent-wrapper">
        <div data-testid="child-component">
          <PresenterView presenters={presenters} />
        </div>
        <div data-testid="child-component">
          <TimeSlots
            info={timeSlots}
            presenters={presenters}
            tables={tablesData}
          />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
