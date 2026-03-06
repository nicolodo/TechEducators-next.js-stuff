
import pg from "pg"
import Link from "next/link"

export default async function ShowPost(
  {postId}
) {
  // const slug = await postId
  const db = new pg.Pool({
    connectionString: process.env.NEXT_POSTGRES,
  });
  const res = (await db.query(
    'SELECT * FROM POSTS WHERE ID = $1',[postId])
  ).rows;
  const post = res[0]
  console.log(post)
  
  return (
    <div className="border hover:bg-red-500">
      <h1>{`post id: ${postId}`}</h1>
      <h1>{`post title: ${post.title}`}</h1>
      <h1>{`post content: ${post.content}`}</h1>
      {/* {post.replyTo && <h1>
        <Link href={`/fetchPosts/postgres/${post.replyTo}`}>
          {`post reply to: ${post.replyTo}`}
        </Link>
      </h1>  
      } */}
    </div>
    
  )
}
  
  