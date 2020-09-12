import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "../../Contact";

afterEach(cleanup);

describe("contact is rendering", () => {
  it("renders", () => {
    render(<Contact />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("inserts text into h1", () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId("h1tag")).toHaveTextContent("Contact me");
  });

  it("inserts text into button", () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId("button")).toHaveTextContent("Submit");
  });
});
