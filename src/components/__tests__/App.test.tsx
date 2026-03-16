import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import { createMemoryRouter, RouterProvider } from "react-router";

import Layout from "@/components/Layout";
import Count from "@/pages/Count";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

const createTestRouter = (initialRoute = "/") =>
  createMemoryRouter(
    [
      {
        element: <Layout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/count", element: <Count /> },
          { path: "*", element: <NotFound /> },
        ],
      },
    ],
    { initialEntries: [initialRoute] },
  );

it("renders NotFound page for an invalid route", () => {
  const router = createTestRouter("/invalid-route");
  render(<RouterProvider router={router} />);
  expect(screen.getByText("Not Found")).toBeInTheDocument();
});

it("can browse to the count page and increment counter", async () => {
  const router = createTestRouter();
  render(<RouterProvider router={router} />);
  expect(screen.getByText("Welcome!")).toBeTruthy();
  await userEvent.click(screen.getByText("Go to count page"));
  expect(await screen.findByText("Count Page")).toBeTruthy();
  await userEvent.click(screen.getByText("Increment"));
  expect(await screen.findByText("Current Count: 1")).toBeTruthy();
});
