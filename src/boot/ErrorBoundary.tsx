import * as React from "react";

export interface Props {}
export interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.

    return { hasError: true };
  }
  componentDidCatch(error) {
    // You can also log the error to an error reporting service
    if (error) {
      this.setState({ hasError: true });
    }
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
