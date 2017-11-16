import React from 'react';

import routes from '../routes';

export default class LayoutContainer extends React.Component {
  render() {
    return (
      <div className="container">
        {routes}

        <style jsx>{`
          .container {
            margin: 100px auto;
            width: 200px;
          }
        `}</style>
      </div>
    );
  }
}
