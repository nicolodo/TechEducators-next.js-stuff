
import pg from "pg"

export async function generateMetadata(
    {params, searchParams}, parent){
    
    const id = await params

}

export default async function PostgresPostsPage(
    {params}
) {
    const id = await params
    const db = new pg.Pool({
        connectionString: process.env.NEXT_POSTGRES,
    });


    return (
        <div>
            <h1>${id}</h1>
        </div>

    )
}

