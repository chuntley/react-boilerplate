import React from "react";

import { useStore } from "@/hooks/useStore";

const Count: React.FC = (): React.ReactElement => {
  const { count, increment } = useStore();

  return (
    <section>
      <>
        <h1>Count Page</h1>
        <button type="button" onClick={() => increment()}>
          Increment
        </button>
        <p>Current Count: {count}</p>
      </>
    </section>
  );
};

export default Count;
