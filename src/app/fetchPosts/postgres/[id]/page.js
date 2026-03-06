
import pg from "pg"
import Link from "next/link"

export async function generateMetadata(
  {params, searchParams}, parent){
    
    const slug= await params
    return{
      title: 'postid: '+ slug.id,
      description:"slug",
    }
    
  }
  
  export default async function PostgresPostsPage(
    {params}
  ) {
    const slug = await params
    const db = new pg.Pool({
      connectionString: process.env.NEXT_POSTGRES,
    });
    const res = (await db.query(
      'SELECT * FROM POSTS WHERE ID = $1',[slug.id])
    ).rows;
    const post = res[0]
    console.log(post)
    
    
    return (
      <div>
      <h1>{`post id: ${slug.id}`}</h1>
      <h1>{`post title: ${post.title}`}</h1>
      <h1>{`post content: ${post.content}`}</h1>
      {post.replyTo && <h1>
        <Link href={`/fetchPosts/postgres/${post.replyTo}`}>
          {`post reply to: ${post.replyTo}`}
        </Link>
      </h1>  
      }
      </div>
      
    )
  }
  
  