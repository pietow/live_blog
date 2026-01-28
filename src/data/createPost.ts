"use server"

import { createClient } from "@libsql/client"
import { revalidatePath } from "next/cache"

export async function createPost(
    title: string,
    description: string,
) {
    const client = createClient({
        url: process.env.DB_URL ?? "",
    })

    await client.execute({
        sql: "INSERT INTO posts(title, description) VALUES (?,?)",
        args: [title, description],
    })

    client.close()
    revalidatePath("/posts")

}