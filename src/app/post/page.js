import Link from "next/link";

import Navbar from "/src/components/navbar.js";
import { getPosts } from "/src/utils.js";

export default async function Post() {
  const posts = await getPosts();

  return (
    <main className="flex flex-col m-5">
      <Navbar />
      <h1 className="text-2xl text-center">Blog</h1>
      <hr className="m-5" />
      <div className="grid grid-cols-3 gap-5 m-5 justify-items-center">
        {posts.map((post) => (
          <Link
            href={`/post/${post.sys.id}`}
            key={post.sys.id}
            className="p-2 bg-stone-100 shadow-sm shadow-stone-500 lg:w-60 lg:h-60"
          >
            {/* TODO: Reponsive Design */}
            <h2>{post.fields.title}</h2>
            <p>{post.fields.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
