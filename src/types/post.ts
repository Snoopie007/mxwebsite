import { JSXElementConstructor, ReactElement } from "react"

export type PostMeta = {
    id: string,
    title: string,
    description: string,
    image: string,
    publishedAt: string,
    updatedAt: string,
    author: string
    isPublished: boolean
    duration: string
    tags: string[],
}
export type PostToC = {
    level: number | undefined
    headline: string | undefined
    slug: string | undefined
}

export type Post = {
    toc: PostToC[]
    meta: PostMeta
    content: ReactElement<any, string | JSXElementConstructor<any>>,
}