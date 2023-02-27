import React, {Component} from "react";
import StarDB from "../StarDB";

class ErrorBoundary extends Component{
    state = {
        hasError: false,
        errorInfo: ""
    }
    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            hasError: error,
            errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
    }
    render() {
        if (this.state.errorInfo) {
            return (
                <div className="error">
                    <h2>Something went wrong.</h2>
                    <p>{this.state.errorInfo.componentStack
                    }</p>
                </div>
            );
        }
        return<>
            <StarDB/>
        </>
    }
}
export default ErrorBoundary