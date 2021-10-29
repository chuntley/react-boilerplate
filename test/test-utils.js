import 'regenerator-runtime/runtime'
import { render as rtlRender } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'


export const render = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)
  return rtlRender(ui, { wrapper: BrowserRouter })
}

