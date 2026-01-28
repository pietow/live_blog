'use client'

export function ErrorAlert({
    error,
    resetErrorBoundary,
}: {
    error: Error
    resetErrorBoundary: () => void
}) {
    return (
        <div role="alert">
            <h3> Somthing went wrong</h3>
            <p>{error.message}</p>
            <button onClick={resetErrorBoundary}>Retry</button>
        </div>
    )
}
