import React from "react";
import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { AppContextProvider } from "@/hooks/useAppContext";

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
    <HashRouter>
      <ContextWrapper>{children}</ContextWrapper>
    </HashRouter>
  );
};

export const render = (
  ui: JSX.Element,
  options: RenderOptions = {},
  route = "/",
): RenderResult => {
  window.history.pushState({}, "", route);
  return rtlRender(ui, { wrapper: RouterWrapper, ...options });
};
