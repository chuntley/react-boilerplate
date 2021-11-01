import "regenerator-runtime/runtime";
import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

export const renderWithRouter = (
  ui: JSX.Element,
  options: RenderOptions = {},
  route = "/"
): RenderResult => {
  window.history.pushState({}, "Test page", route);
  return rtlRender(ui, { wrapper: BrowserRouter, ...options });
};

export const render = (
  ui: JSX.Element,
  options: RenderOptions = {}
): RenderResult => {
  return rtlRender(ui, options);
};
