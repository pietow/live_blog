'use client'

export function ErrorAlert({
    error,
}: {
    error: unknown

}) {
    return (
        <div role="alert">
            <h3> Somthing went wrong</h3>
            <p>{error instanceof Error ? error.message : 'unkown Error'}</p>
        </div>
    )
}
