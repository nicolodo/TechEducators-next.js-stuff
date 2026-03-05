
import Link from "next/link";
import pg from "pg"

export const metadata = {
  title: "Postgres Posts",
  description: "This is a page that lists content got via pg"
}

export default async function PostgresPostsPage() {
  const db = new pg.Pool({
    connectionString: process.env.NEXT_POSTGRES,
  });
    
  const posts = (await db.query(`SELECT * FROM posts`)).rows;
    
  console.log(posts);
    
  return (
    <div>
      <h1>Postgres Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/fetchPosts/postgres/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
        
  )
}

