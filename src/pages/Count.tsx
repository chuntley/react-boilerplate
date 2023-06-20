import React from "react";

import { useAppContext } from "@/hooks/useAppContext";

const Count: React.FC = (): JSX.Element => {
  const { count, countIncrement } = useAppContext();

  return (
    <section>
      <>
        <h1>Count Page</h1>
        <button onClick={() => countIncrement(count + 1)}>Increment</button>
        <p>Current Count: {count}</p>
      </>
    </section>
  );
};

export default Count;
