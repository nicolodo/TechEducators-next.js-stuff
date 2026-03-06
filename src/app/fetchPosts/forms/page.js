
import pg from "pg";

export default function NewPostPage() {
  async function handleSavePost(formData) {
    "use server"; // makes ^ function run on server 
    // somehow
    console.log("Saving post to the database...");
    
    // connect to our database
    const db = new pg.Pool(
      { connectionString: process.env.NEXT_POSTGRES });

    // get form data from the formData Obj next provides
    const title = formData.get("title");
    const content = formData.get("content");
    const replyToRaw = formData.get("replyTo");

    // Convert to number or null if empty
    const replyTo = replyToRaw ? parseInt(replyToRaw, 10) : null;

    // insert the data into postgres
    await db.query(
  `INSERT INTO posts (title, content, "replyTo") 
  VALUES ($1, $2, $3)`,[title, content, replyTo]);
  console.log("Post saved!");
  }

  return (
    <form action={handleSavePost}>
      <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" className="bg-red-400" />
      <label htmlFor="content">Content</label>
       <textarea id="content" name="content" className="bg-red-400"/>
      <label htmlFor="replyTo">ReplyTo</label>
        <input id="replyTo" name="replyTo" type="number"
        className="bg-red-400" />
      <button type="submit" className="bg-red-600">Save</button>
    </form>
  );
} 

