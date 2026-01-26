import Link from 'next/link'
import { posts } from '@/data/posts'
import { GoToFirstPostButton } from '@/components/GoToFirstPostButton'

export default function Posts() {
    return (
        <main>
            <h2>Posts</h2>
            <GoToFirstPostButton />
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                            <span>{post.title}</span>
                        </Link>
                        
                        <p>{post.description}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}
