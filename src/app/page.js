import getPosts from "../utils.js";

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.sys.id}>
              <p>{post.fields.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
