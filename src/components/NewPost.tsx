'use client'
import { useState } from 'react'
import { createPost } from '@/data/createPost'

export function NewPost() {
    const [isMutating, setIsMutating] = useState(false)
    const [status, setStatus] = useState<'pending' | 'error' | 'success'>(
        'pending',
    )
    async function handleClick() {
        setIsMutating(true)
        const result = await createPost('New Post', 'New Post Description')

        setStatus(result.ok ? 'success' : 'error')
        setIsMutating(false)
    }

    return (
        <div className="actions">
            <button
                className={`${isMutating ? 'bg-red-500' : 'bg-green-500'}`}
                type="button"
                onClick={handleClick}
            >
                {isMutating ? 'Creating ...' : 'Create New Post'}
            </button>
            {status === 'error' && (
                <span role="alert">Unerwarteter Fehler</span>
            )}

            {status === 'success' && (
                <span role="alert">Post erfolgreich erstellt</span>
            )}
        </div>
    )
}
