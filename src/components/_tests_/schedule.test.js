import React from "react";
import { Router } from "react-router-dom";
import { render, within } from "@testing-library/react";
import { createMemoryHistory } from "history";
import Schedule from "../schedule/Schedule";

describe("Schedule component", () => {
  it("should render Schedule component", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Schedule />
      </Router>
    );
  });

  it("should test if there are 2 child components", () => {
    const { getByTestId } = render(<Schedule />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const appHeader = getByTestId("parent-wrapper");
    const clocksInHeader = within(appHeader).getAllByTestId("child-component");
    expect(clocksInHeader.length).toBe(2);
  });
});
