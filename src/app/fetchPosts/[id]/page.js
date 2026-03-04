import Link from "next/link"

export async function generateMetadata(
  {params, searchParams}, parent) {
    const slug = await params

    return {
      title: slug.id
    }
}

export default async function fetchPosts(
  {params, searchParams}){

  const query = await searchParams;
  console.log("searchParams", query)

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug.id}`
  )
  const post = await res.json();

  const slug = await params
  console.log(slug)

  return (
    <>
      <p>Back to <Link href={`/fetchPosts`}> fetchPosts</Link></p>
      <h1>Here are the posts post click</h1>
      <h1>This is post {post.id}</h1>
      <h2>Title: {post.title}</h2>
      <p>{post.body}</p>
    </>
  )
}

