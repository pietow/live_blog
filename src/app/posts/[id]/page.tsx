// url /posts/1

import { PostDetail } from '@/components/PostDetail'


export default async function Post({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    let id = (await params).id

    return (
        <main>
            <PostDetail id={Number(id)} />
        </main>
    )
}
