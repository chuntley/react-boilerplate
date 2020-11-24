import React from 'react';
import { css } from 'linaria';

import routes from '../routes';

const containerStyle = css`
  margin: 100px auto;
  width: 200px;
`;

const LayoutContainer = (): JSX.Element => {
  return (
    <div className={containerStyle}>
      {routes}
    </div>
  );
};

export default LayoutContainer;
