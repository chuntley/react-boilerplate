import React from "react";
import { expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "../../utils/rtl-wrapper";

import App from "../App";

it("can browse to the count page", async () => {
  const { getByText, findByText } = renderWithRouter(<App />);
  expect(getByText("Welcome!")).toBeTruthy();
  userEvent.click(getByText("Go to count page"));
  expect(findByText("Count Page")).toBeTruthy();
});
