import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='container mx-auto flex flex-col items-center justify-center py-24 text-center'>
          <h1 className='text-4xl font-bold text-primary mb-4'>Something went wrong</h1>
          <p className='text-slate-500 dark:text-slate-400 mb-8'>
            An unexpected error occurred. Please try refreshing the page.
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false })
              window.location.href = '/'
            }}
            className='px-5 py-2.5 bg-primary text-white rounded-md hover:bg-blue-700 transition-colors'
          >
            Go Home
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
