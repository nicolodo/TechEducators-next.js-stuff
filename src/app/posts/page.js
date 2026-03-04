
import Link from "next/link";

export default async function PostsPage(params) {
    const slug = await params
    console.log(slug)
    return (
        <h1>Post Page {slug.id}</h1>
    
    )
}
