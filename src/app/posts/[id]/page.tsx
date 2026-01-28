// url /posts/1
import { Suspense } from "react"
import { Loading } from "@/components/Loading"
import { PostDetail } from "@/components/PostDetail"

export default async function Post({ params }: { params: Promise<{id: string}>}) {
    let id = (await params).id
 
    
    return (<main>
            <Suspense fallback={<Loading />}>
                <PostDetail id={Number(id)} />
            </Suspense>
        </main>)
}