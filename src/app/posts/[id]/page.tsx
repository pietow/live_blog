// url /posts/1
import { notFound } from "next/navigation"
import { posts } from "@/data/posts"

export default async function Post({ params }: { params: Promise<{id: string}>}) {
    let id = (await params).id
    const post = posts.find((post) => post.id === Number(id))
    if (!post) {
        notFound()
    }
    
    return (<main>
        <h1>Blog post {id}</h1>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        
        </main>)
}