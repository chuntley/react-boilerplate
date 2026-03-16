import { render } from "@/utils/rtl-wrapper";
import { screen } from "@testing-library/react";
import { expect, it } from "vitest";

import Home from "@/pages/Home";

it("renders <Home /> page", () => {
  render(<Home />);
  expect(screen.getByText("Welcome!")).toBeInTheDocument();
  expect(screen.getByText("Current count: 0")).toBeInTheDocument();
});
