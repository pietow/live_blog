'use server'

import { createClient, type Client, type ResultSet } from '@libsql/client'
import { revalidatePath } from 'next/cache'

export async function createPost(title: string, description: string) {
    let client: Client | undefined
    let result: ResultSet | undefined

    try {
        client = createClient({
            url: process.env.DB_URL ?? '',
        })

        result = await client.execute({
            sql: 'INSERT INTO posts(title, description) VALUES (?,?)',
            args: [title, description],
        })
    } catch {
        return { ok: false }
    } finally {
        client?.close()
    }
    revalidatePath('/posts')
    return {
        ok: true,
        id: result ? result.lastInsertRowid : undefined,
    }
}
