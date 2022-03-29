import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../hooks/useAppContext";

const Home: React.FC = (): JSX.Element => {
  const { state } = useContext(AppContext);

  return (
    <section>
      <h1>Welcome!</h1>
      <p>Current count: {state.count}</p>
      <Link to="/count">Go to count page</Link>
    </section>
  );
};

export default Home;
