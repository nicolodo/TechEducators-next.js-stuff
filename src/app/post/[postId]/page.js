

export async function generateMetadata(
  {params, searchParams}, parent) {
    const id = (await params).id;
    // Load the post
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    )
    const post = await res.json();
    return {
      title: post.title,
    };
}


export default async function postPage(
  { params }) {
  return (
    <>
      <p>Hello there</p>
      <p>This is the post page</p>
    </>
  )
}