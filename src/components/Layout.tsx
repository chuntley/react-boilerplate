import React from "react";

interface LayoutProps {
  children: React.ReactElement;
}

const Layout = ({ children }: LayoutProps): React.ReactElement => {
  return <div>{children}</div>;
};

export default Layout;
