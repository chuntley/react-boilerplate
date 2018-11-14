import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import Home from './Home';

describe('Page: Home', () => {
  let wrapper;
  let loadSpy;
  const sandbox = sinon.createSandbox();
  const defaultProps = {
    addInitialLoad: () => {},
  };

  afterEach(() => {
    sandbox.restore();
  });

  beforeEach(() => {
    loadSpy = sandbox.spy(defaultProps, 'addInitialLoad');
    wrapper = shallow(<Home {...defaultProps} />);
  });

  it('renders <Home /> page', () => {
    wrapper.find('h1').should.have.length(1);
    loadSpy.should.have.been.calledOnce;
  });
});
