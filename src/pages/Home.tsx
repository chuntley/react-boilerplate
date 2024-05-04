import React from "react";
import { Link } from "react-router-dom";

import { useAppContext } from "@/hooks/useAppContext";

const Home: React.FC = (): JSX.Element => {
  const { count } = useAppContext();

  return (
    <section>
      <h1>Welcome!</h1>
      <p>Current count: {count}</p>
      <Link to="/count">Go to count page</Link>
    </section>
  );
};

export default Home;
