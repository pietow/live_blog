'use client'
import { useState } from 'react'
import { createPost } from '@/data/createPost'

export function NewPost() {
    const [isMutating, setIsMutating] = useState(false)
    async function handleClick() {
        setIsMutating(true)
        await createPost('New Post', 'New Post Description')
        setIsMutating(false)
    }

    return (
        <div className="actions">
            <button className={`${isMutating ? 'bg-red-500' : 'bg-green-500'}`} type="button" onClick={handleClick}>
                {isMutating ? "Creating ..." : "Create New Post"}
            </button>
        </div>
    )
}
