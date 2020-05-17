import React from 'react'
import { Redirect } from 'react-router-dom'

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
      // Display fallback UI
        this.setState({ hasError: true });
      // You can also log the error to an error reporting service
      console.log(error)
      console.log(info)
    }
  
    render() {
      if (this.state.hasError) {
          console.log("hurra!!")
        // You can render any custom fallback UI
           return  <Redirect to="/"/>
      }
      return this.props.children;
    }
  }

export default ErrorBoundary