import React from "react";
import { expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { render } from "@/utils/rtl-wrapper";

import Count from "@/pages/Count";

it("renders <Count /> page", () => {
  const { getByText } = render(<Count />);
  expect(getByText("Count Page")).toBeTruthy();
  getByText("Current Count: 0");
});

it("clicks button and fires increment counter", () => {
  const { getByText, findByText } = render(<Count />);
  userEvent.click(getByText("Increment"));
  expect(findByText("Current Count: 1")).toBeTruthy();
});
