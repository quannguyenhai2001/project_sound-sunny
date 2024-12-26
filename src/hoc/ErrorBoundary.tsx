import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
	errorMessage?: string;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, errorMessage: error.message };
	}

	componentDidCatch(error, info) {
		console.error('Error captured in ErrorBoundary:', error, info);
	}

	handleRetry = () => {
		this.setState({ hasError: false });
		window.location.reload();
	};

	render() {
		if (this.state.hasError) {
			return (
				<div style={{ textAlign: 'center' }}>
					<h2>Unexpected Application Error!</h2>
					<p>{this.state.errorMessage}</p>
					<button onClick={this.handleRetry}>Reload</button>
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
