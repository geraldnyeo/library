import Link from "next/link";

import { getPosts } from "/src/utils.js";

export default async function Post() {
  const posts = await getPosts();

  return (
    <main className="flex flex-col m-5">
      <h1>Posts</h1>
      <hr />
    </main>
  );
}
