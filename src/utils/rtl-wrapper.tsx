import { render as rtlRender } from "@testing-library/react";
import { RenderOptions, RenderResult } from "@testing-library/react";
import React from "react";
import { HashRouter } from "react-router-dom";

const RouterWrapper = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  return <HashRouter>{children}</HashRouter>;
};

export const render = (
  ui: JSX.Element,
  options: RenderOptions = {},
  route = "/",
): RenderResult => {
  window.history.pushState({}, "", route);
  return rtlRender(ui, { wrapper: RouterWrapper, ...options });
};
