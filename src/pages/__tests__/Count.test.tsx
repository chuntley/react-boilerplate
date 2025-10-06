import { render } from "@/utils/rtl-wrapper";
import { cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, expect, it } from "vitest";

import Count from "@/pages/Count";

afterEach(() => {
  cleanup();
});

it("renders <Count /> page", () => {
  const { getByText } = render(<Count />);
  expect(getByText("Count Page")).toBeTruthy();
  getByText("Current Count: 0");
});

it("clicks button and fires increment counter", async () => {
  const user = userEvent.setup();
  const { getByRole, findByText } = render(<Count />);
  await user.click(getByRole("button", { name: "Increment" }));
  expect(await findByText("Current Count: 1")).toBeTruthy();
});
