import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { incrementOne } from '../redux/actions/sample';

const About = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.sample.counter);

  return (
    <section>
      <>
        <h1>About Page</h1>
        <button onClick={() => dispatch(incrementOne)}>Increment</button>
        <p>Current Count: {counter}</p>
      </>
    </section>
  );
};

export default About;
