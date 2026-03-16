import { render } from "@/utils/rtl-wrapper";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";

import Count from "@/pages/Count";

it("renders <Count /> page", () => {
  render(<Count />);
  expect(screen.getByText("Count Page")).toBeInTheDocument();
  expect(screen.getByText("Current Count: 0")).toBeInTheDocument();
});

it("clicks button and fires increment counter", async () => {
  const user = userEvent.setup();
  render(<Count />);
  await user.click(screen.getByRole("button", { name: "Increment" }));
  expect(await screen.findByText("Current Count: 1")).toBeInTheDocument();
});
