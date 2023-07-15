import Link from "next/link";

import { getPosts } from "/src/utils.js";

export default async function Home() {
  const posts = await getPosts();
  // console.log(posts);

  return (
    <main className="flex min-h-screen flex-col">
      <div>
        <p>THE TITLE</p>

        <div id="shelf" className="grid grid-cols-3">
          {posts.map((post) => (
            <Link href={`/post/${post.sys.id}`} key={post.sys.id}>
              <div
                id={`post-${post.sys.id}`}
                className="bg-white m-5 shadow-md shadow-slate-400"
              >
                <h1>{post.fields.title}</h1>
                <p>{post.fields.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
