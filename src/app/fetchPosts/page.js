
import Link from "next/link";

export const metadata = {
    title: "fetchPosts",
    description: "we fetch data from an API"
}

export default async function PostsPage(
  { searchParams}
) {
  const query = await searchParams;
  console.log("searchParams: ", query)
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  )
  const posts = await res.json(); // parse the response as JSON
  // console.log(posts)
  if (query.sort === "desc"){
    posts.reverse();
  }

  return (
    <main>
      <h1>Posts</h1>
      <p><Link href={`/fetchPosts/forms`}>
        Post a new post via forms</Link></p>
      <p><Link href={`/fetchPosts/postgres`}>
        view the posts in the db via postgres</Link></p>
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
