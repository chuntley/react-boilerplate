import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '../../test/test-utils';

import App from './App';

it('can browse to the about page', async () => {
  const { queryByText } = render(<App />);
  expect(queryByText('Welcome!')).toBeTruthy();
  userEvent.click(queryByText('Go to about'));
  expect(queryByText('About Page')).toBeTruthy();
});
