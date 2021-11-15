import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { css } from "linaria";

import { AppContext } from "../hooks/useAppContext";

const titleStyle = css`
  color: red;
`;

const Home: React.FC = (): JSX.Element => {
  const { state } = useContext(AppContext);

  return (
    <section>
      <h1 className={titleStyle}>Welcome!</h1>
      <p>Current count: {state.count}</p>
      <Link to="/count">Go to count page</Link>
    </section>
  );
};

export default Home;
