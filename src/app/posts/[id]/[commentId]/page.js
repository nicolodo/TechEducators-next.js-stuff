
import Link from "next/link";

export default async function PostPage({ params }) {
    const slug = await params;
    console.log(slug);
    return (
        <h1>
            Post Page ID: {slug.id},Comment ID: {slug.commentId}
        </h1>
    ); //Output: Post Page ID: 1, Comment ID: 2

}
