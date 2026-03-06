
import pg from "pg"
import Link from "next/link"
import ShowPost from "@/components/ShowPost"

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
      <>
        <ShowPost postId={post.id}/>
        {post.replyTo && 
          <Link href={`/fetchPosts/postgres/${post.replyTo}`}>
            <ShowPost postId={post.replyTo}/>
          </Link>
        }
      </>
      
    )
  }
  
  