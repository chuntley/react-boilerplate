import React from 'react';
import styled from 'styled-components';

import routes from '../routes';

export default class LayoutContainer extends React.Component {
  render() {
    const Container = styled.div`
      display: flex;
      height: 100%;
      width: 100%;
    `;

    return (
      <Container>
        {routes}
      </Container>
    );
  }
}
