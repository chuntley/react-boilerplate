import React from 'react';
import { css } from 'linaria';

const containerStyle = css`
  margin: 100px auto;
  width: 200px;
`;

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={containerStyle}>
      {children}
    </div>
  );
};

export default Layout;
