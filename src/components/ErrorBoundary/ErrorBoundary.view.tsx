import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

interface State {
    error: Error | null,
    errorInfo: ErrorInfo | null
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null,
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            error,
            errorInfo,
        });
        // Log error info somewhere
    }

    // todo
    render() {
        if (this.state.error) {
            return <h2>Something went wrong!</h2>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
