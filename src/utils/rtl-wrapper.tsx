// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

import React from "react";
import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "../hooks/useAppContext";

const ContextWrapper = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  return <AppContextProvider>{children}</AppContextProvider>;
};

const RouterWrapper = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  return (
    <BrowserRouter>
      <ContextWrapper>{children}</ContextWrapper>
    </BrowserRouter>
  );
};

export const renderWithRouter = (
  ui: JSX.Element,
  options: RenderOptions = {},
  route = "/"
): RenderResult => {
  window.history.pushState({}, "Test page", route);
  return rtlRender(ui, { wrapper: RouterWrapper, ...options });
};

export const render = (
  ui: JSX.Element,
  options: RenderOptions = {}
): RenderResult => {
  return rtlRender(ui, { wrapper: ContextWrapper, ...options });
};
