
import Link from "next/link";

export const metadata = {
    title: "fetchPosts",
    description: "we fetch data from an API"
}

export default async function PostsPage() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  )
  const posts = await res.json(); // parse the response as JSON
  // console.log(posts)
  
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/fetchPosts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
