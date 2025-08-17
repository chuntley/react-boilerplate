import { render } from "@/utils/rtl-wrapper";
import userEvent from "@testing-library/user-event";
import React from "react";
import { expect, it } from "vitest";

import App from "@/components/App";

it("can browse to the count page and increment counter", async () => {
  const { getByText, findByText } = render(<App />);
  expect(getByText("Welcome!")).toBeTruthy();
  await userEvent.click(getByText("Go to count page"));
  expect(await findByText("Count Page")).toBeTruthy();
  await userEvent.click(getByText("Increment"));
  expect(await findByText("Current Count: 1")).toBeTruthy();
});
