
import Link from "next/link";

export const metadata = {
    title: "Posts - Next.js",
    description: "A simple blog built with Next.js",
}

export default async function PostsPage(params) {
    const slug = await params
    console.log(slug)
    return (
        <h1>Post Page {slug.id}</h1>
    
    )
}
