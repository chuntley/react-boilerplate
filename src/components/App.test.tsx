import React from 'react';
import { render } from '../../test/test-utils';

import App from './App';

it('can browse to the about page', async () => {
  const { queryByText, history: { navigate } } = render(<App />);
  expect(queryByText('Welcome!')).toBeTruthy();
  await navigate('/about');
  expect(queryByText('About Page')).toBeTruthy();
});
