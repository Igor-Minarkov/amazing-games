import userEvent from "@testing-library/user-event";
import InlineEdit from "../InlineEdit/InlineEdit";
import { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
expect.extend(toHaveNoViolations);

const apples = "apples";

const TestComponent = () => {
  const [value, setValue] = useState(apples);
  return <InlineEdit value={value} setValue={setValue} />;
};

describe("Inline Edit component", () => {
  it("should render Inline edit component", () => {
    render(<InlineEdit />);
  });

  it("should focus when tabbed to", () => {
    render(<TestComponent />);
    const input = screen.getByRole("textbox");

    expect(document.body).toHaveFocus();
    userEvent.tab();

    expect(input).toHaveFocus();
  });

  test("should not have any accessibility violations", async () => {
    window.getComputedStyle = () => {};
    const { container } = render(<TestComponent />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
