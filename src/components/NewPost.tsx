'use client'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createPost } from '@/data/createPost'

export function NewPost() {
    const queryClient = useQueryClient()
    const { mutate, isPending, isError, isSuccess } = useMutation({
        mutationFn: ({
            title,
            description,
        }: {
            title: string
            description: string
        }) => createPost('New Post', 'New Post Description'),
        onSuccess: async() => {
            queryClient.invalidateQueries({
                queryKey: ["posts"],
            })
        }
    })

    async function handleClick() {
        mutate({
            title: 'New Post',
            description: 'New Post Description',
        })
    }

    return (
        <div className="actions">
            <button
                className={`${isPending ? 'bg-red-500' : 'bg-green-500'}`}
                type="button"
                onClick={handleClick}
            >
                {isPending ? 'Creating ...' : 'Create New Post'}
            </button>
            {isError && (
                <span role="alert">Unerwarteter Fehler</span>
            )}

            {isSuccess && (
                <span role="alert">Post erfolgreich erstellt</span>
            )}
        </div>
    )
}
