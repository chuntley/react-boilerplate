import React from 'react';
import { render } from '../../test/test-utils';

import Home from './Home';

it('renders <Home /> page', () => {
  const { queryByText } = render(<Home />);
  expect(queryByText('Welcome!')).toBeTruthy();
});
