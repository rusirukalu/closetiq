// import React, { Component } from 'react';

// class ErrorBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.log(error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h1>Something went wrong. Please try again later.</h1>;
//     }

//     return this.props.children;
//   }
// }

// export default ErrorBoundary;



import React, { Component } from 'react';

// Simulating external error logging (e.g., Sentry, LogRocket)
const logErrorToService = (error, errorInfo) => {
  // You can replace this with actual error reporting logic
  console.error('Logging error to service:', error, errorInfo);
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retry: false,
    };
  }

  // This method is called when an error occurs during rendering, lifecycle methods, or constructors
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error details to an external service (e.g., Sentry, LogRocket)
    logErrorToService(error, errorInfo);

    // Update state with the error and its info to show detailed error UI
    this.setState({ error, errorInfo });
  }

  // Retry logic (optional)
  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null, retry: true }, () => {
      this.setState({ retry: false });
    });
  };

  render() {
    if (this.state.hasError) {
      // Different fallback UI for various error types
      if (this.state.error.message.includes('Network')) {
        return (
          <div>
            <h1>Network error occurred. Please check your connection and try again.</h1>
            <button onClick={this.handleRetry}>Retry</button>
          </div>
        );
      }

      // For general JavaScript errors or other unexpected errors
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{this.state.error.message}</p>
          <p>{process.env.NODE_ENV === 'development' && this.state.error.stack}</p> {/* Show stack trace in development */}
          <button onClick={this.handleRetry}>Try again</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
