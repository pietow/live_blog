import Link from 'next/link'
import { getAllPosts, getFilteredPosts } from '@/data/queries'
import { GoToFirstPostButton } from '@/components/GoToFirstPostButton'

export default async function Posts({
    searchParams,
}: {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined // criteria: string | string[] | undefined; es kann auch ein anderer schlüssel kommen
    }>
}) {
    const criteria = (await searchParams).criteria
    const resolvedPosts =
        typeof criteria === 'string'
            ? await getFilteredPosts(criteria)
            : await getAllPosts()
    const resolvedHeading =
        typeof criteria === 'string' ? `Posts for ${criteria}` : 'Posts'
    return (
        <main>
            <h2>{resolvedHeading}</h2>
            <GoToFirstPostButton />
            <ul>
                {resolvedPosts.map((post) => (
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
