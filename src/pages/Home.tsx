import React from "react";
import { Link } from "react-router-dom";

import { useStore } from "@/hooks/useStore";

const Home: React.FC = (): React.ReactElement => {
  const count = useStore((state) => state.count);

  return (
    <section>
      <h1>Welcome!</h1>
      <p>Current count: {count}</p>
      <Link to="/count">Go to count page</Link>
    </section>
  );
};

export default Home;
