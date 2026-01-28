'use client'

import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'
import { ErrorAlert } from './ErrorAlert'
import { type ReactNode } from 'react'
import { error } from 'console'

export function ErrorBoundary({ children }: { children: ReactNode }) {
    return (
        <ReactErrorBoundary
            FallbackComponent={ErrorAlert}
            onError={(error, info) => {
                console.error('Unerwarteter Fehler', {
                    error,
                    info,
                })
            }}
        >
            {children}
        </ReactErrorBoundary>
    )
}
