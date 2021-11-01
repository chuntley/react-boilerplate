import React from "react";
import { Link } from "react-router-dom";
import { css } from "linaria";

const titleStyle = css`
  color: red;
`;

const Home: React.FC = (): JSX.Element => {
  return (
    <section>
      <h1 className={titleStyle}>Welcome!</h1>
      <Link to="/about">Go to about</Link>
    </section>
  );
};

export default Home;
