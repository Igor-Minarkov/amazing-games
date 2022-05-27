import MainView from "../mainView/MainView";
import React from "react";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("Main view test", () => {
  const array = [
    [
      { name: "P1", id: "0", currTable: null },
      { name: "P2", id: "1", currTable: null },
      { name: "P3", id: "2", currTable: null },
    ],
    [
      { name: "P4", id: "3", currTable: null },
      { name: "P5", id: "4", currTable: null },
      { name: "P6", id: "5", currTable: null },
    ],
    [
      { name: "P7", id: "6", currTable: null },
      { name: "P8", id: "7", currTable: null },
      { name: "P9", id: "8", currTable: null },
    ],
  ];

  it("should render Main view component", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <MainView />
      </Router>
    );
  });

  it("should render with mock data (arrays)", () => {
    const history = createMemoryHistory();
    const {} = render(
      <Router location={history.location} navigator={history}>
        <MainView array={array} />
      </Router>
    );
  });
});
