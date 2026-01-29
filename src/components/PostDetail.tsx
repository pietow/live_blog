'use client'

import { getPost } from '@/data/queries'
import { useQuery } from '@tanstack/react-query'
import { Loading } from './Loading'
import { ErrorAlert } from './ErrorAlert'
import { resolve } from 'path'


export function PostDetail({ id }: { id: number }) {
    const { data: post, isPending, error } = useQuery({
        queryKey: ["post", id],
        queryFn: async() => {
            const response = await fetch(`/api/posts/${id}`)
            if (!response.ok) {
                throw new Error(
                    response.status === 404 ? "Blog post not found" : "Problem fetching data"
                )
            }
            return await response.json(); 
        }
    })

    if (isPending) {
        return <Loading />
    }

    if (error) {
        return <ErrorAlert error={error} />
    }

    if (!post) {
        return <p>Post not found</p>
    }

    return (
        <>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
        </>
    )
}
