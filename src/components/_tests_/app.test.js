import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import React from "react";
import { Router, BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom";

import { App, LocationDisplay } from "../../data/mock-data/AppMock";

test("full app rendering/navigating", async () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  );
  const user = userEvent.setup();

  expect(screen.getByText(/you are home/i)).toBeInTheDocument();

  await user.click(screen.getByText(/about/i));

  // check that the content changed to the new page
  expect(screen.getByTestId("location-display")).toBeInTheDocument();
});

test("rendering a component that uses useLocation", () => {
  const history = createMemoryHistory();
  const route = "/some-route";
  history.push(route);
  render(
    <Router location={history.location} navigator={history}>
      <LocationDisplay />
    </Router>
  );

  expect(screen.getByTestId("location-display")).toHaveTextContent(route);
});

test("full app rendering navigating", () => {
  render(<App />, { wrapper: MemoryRouter });

  // verify page content for expected route
  expect(screen.getByText(/you are home/i)).toBeInTheDocument();
});

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

test("full app rendering", async () => {
  const { user } = renderWithRouter(<App />);
  expect(screen.getByText(/you are home/i)).toBeInTheDocument();

  await user.click(screen.getByText(/about/i));

  expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument();
});

test("rendering a component that uses location", () => {
  const route = "/some-route";
  renderWithRouter(<LocationDisplay />, { route });

  expect(screen.getByTestId("location-display")).toHaveTextContent(route);
});
