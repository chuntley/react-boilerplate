import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '../../test/test-utils';

import About from './About';

it('renders <About /> page', () => {
  const { queryByText } = render(<About />);
  expect(queryByText('About Page')).toBeTruthy();
  queryByText('Current Count: 0');
});

it('clicks button and fires increment counter', () => {
  const { queryByText } = render(<About />);
  userEvent.click(queryByText('Increment'));
  queryByText('Current Count: 1');
});
