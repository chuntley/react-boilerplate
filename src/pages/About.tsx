import React, { useState } from 'react';

const About: React.FC = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <>
        <h1>About Page</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>Current Count: {count}</p>
      </>
    </section>
  );
};

export default About;
