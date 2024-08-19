import React from "react";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return <div>{children}</div>;
};

export default Layout;
