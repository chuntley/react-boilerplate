interface LayoutProps {
  children: JSX.Element;
}

interface ErrorBoundaryProps {
  children: JSX.Element;
}

interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}
