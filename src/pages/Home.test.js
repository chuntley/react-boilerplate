import React from 'react';
import { shallow } from 'enzyme';

import { Home } from './Home';

describe('Page: Home', () => {
  let wrapper;
  const defaultProps = {
    addInitialLoad: () => {},
  };

  beforeEach(() => {
    wrapper = shallow(<Home {...defaultProps} />);
  });

  it('renders <Home /> page', () => {
    wrapper.find('h1').should.have.length(1);
  });
});
