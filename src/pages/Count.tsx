import React, { useContext } from "react";

import { AppContext, incrementCount } from "../hooks/useAppContext";

const Count: React.FC = (): JSX.Element => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <section>
      <>
        <h1>Count Page</h1>
        <button onClick={() => dispatch(incrementCount(1))}>Increment</button>
        <p>Current Count: {state.count}</p>
      </>
    </section>
  );
};

export default Count;
