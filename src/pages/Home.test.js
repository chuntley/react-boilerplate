import React from 'react';
import { expect } from 'chai';
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
    expect(wrapper.find('h1')).to.have.length(1);
  });
});
