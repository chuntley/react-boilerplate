import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { Home } from '../../src/pages/Home';

describe('Page: Home', function () {
  let wrapper;
  const defaultProps = {
    addInitialLoad: () => {},
  };

  beforeEach(function () {
    wrapper = shallow(<Home {...defaultProps} />);
  });

  it('renders <Home /> page', function () {
    expect(wrapper.find('h1')).to.have.length(1);
  });
});
