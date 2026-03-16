import { render } from "@/utils/rtl-wrapper";
import { screen } from "@testing-library/react";
import { expect, it } from "vitest";

import NotFound from "@/pages/NotFound";

it("renders <NotFound /> page", () => {
  render(<NotFound />);
  expect(screen.getByText("Not Found")).toBeInTheDocument();
});
