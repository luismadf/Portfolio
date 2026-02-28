const LoadingSpinner = () => {
  return (
    <div className="flex flex-1 w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-slate-200 border-t-primary rounded-full animate-spin dark:border-slate-700 dark:border-t-primary" />
        <span className="text-slate-400 text-sm">Loading...</span>
      </div>
    </div>
  )
}

export default LoadingSpinner
