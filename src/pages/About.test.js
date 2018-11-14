import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import About from './About';

describe('Page: About', () => {
  let wrapper;
  let countSpy;
  const sandbox = sinon.createSandbox();
  const defaultProps = {
    counter: 5,
    incrementCounter: () => {},
  };

  afterEach(() => {
    sandbox.restore();
  });

  beforeEach(() => {
    countSpy = sandbox.spy(defaultProps, 'incrementCounter');
    wrapper = shallow(<About {...defaultProps} />);
  });

  it('renders <About /> page', () => {
    wrapper.find('h1').should.have.length(1);
    countSpy.should.not.have.been.called;
  });

  it('clicks button and fires increment counter', () => {
    wrapper.find('button').simulate('click');
    countSpy.should.have.been.calledOnce;
  });
});
