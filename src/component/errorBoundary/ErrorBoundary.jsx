import React, {Component} from "react";
import MyRootPage from "../Root/MyRootPage";

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorInfo: ""
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div className="error">
                    <h2>Something went wrong.</h2>
                    <p>{this.state.errorInfo.componentStack}</p>
                </div>
            );
        }
        return <div>
          <MyRootPage/>
        </div>
    }
}

export default ErrorBoundary