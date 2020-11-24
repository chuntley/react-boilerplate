import React from 'react';
import { render } from '../../test/test-utils';

import LayoutContainer from './LayoutContainer';

it('can browse to the about page', async () => {
  const { queryByText, history: { navigate } } = render(<LayoutContainer />);
  expect(queryByText('Welcome!')).toBeTruthy();
  await navigate('/about');
  expect(queryByText('About Page')).toBeTruthy();
});
