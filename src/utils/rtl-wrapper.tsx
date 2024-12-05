import { render as rtlRender } from "@testing-library/react";
import { RenderOptions, RenderResult } from "@testing-library/react";
import React from "react";
import { HashRouter } from "react-router-dom";

const RouterWrapper = ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => {
  return <HashRouter>{children}</HashRouter>;
};

export const render = (
  ui: React.ReactElement,
  options: RenderOptions = {},
  route = "/",
): RenderResult => {
  window.history.pushState({}, "", route);
  return rtlRender(ui, { wrapper: RouterWrapper, ...options });
};
