import { render as rtlRender } from "@testing-library/react";
import type { RenderOptions, RenderResult } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";

export const render = (
  ui: React.ReactElement,
  options: RenderOptions = {},
  route = "/",
): RenderResult => {
  const router = createMemoryRouter([{ path: "*", element: ui }], {
    initialEntries: [route],
  });
  return rtlRender(<RouterProvider router={router} />, options);
};
