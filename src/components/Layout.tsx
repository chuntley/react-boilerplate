interface LayoutProps {
  children: React.ReactElement;
}

const Layout = ({ children }: LayoutProps) => {
  return <div>{children}</div>;
};

export default Layout;
