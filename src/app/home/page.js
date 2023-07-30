import Link from "next/link";

import { getPosts, getShowcases } from "/src/utils.js";

async function Home() {
  // Get first 3 showcases sorted by date
  const showcases = await getShowcases();
  const showcase_list = showcases.slice(0, 3);

  // Get first 6 posts sorted by date
  const posts = await getPosts();
  const post_list = posts.slice(0, 6);

  return (
    <main className="flex min-h-screen flex-col m-5">
      <div id="banner">
        <h1>Title Text</h1>
      </div>

      <h1>Work</h1>
      <div id="showcases">
        <h1 className="">Showcases</h1>

        <hr />

        <div id="showcase-shelf" className="grid grid-cols-3">
          {showcase_list.map((showcase) => (
            <Link href={`/showcase/${showcase.sys.id}`} key={showcase.sys.id}>
              <div
                id={`showcase-${showcase.sys.id}`}
                className="bg-white m-5 shadow-md shadow-slate-400"
              >
                <h2>{showcase.fields.title}</h2>
                <p>{showcase.fields.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div id="posts">
        <h1 className="">Posts</h1>

        <hr className="" />

        <div id="post-shelf" className="grid grid-cols-3">
          {post_list.map((post) => (
            <Link href={`/post/${post.sys.id}`} key={post.sys.id}>
              <div
                id={`post-${post.sys.id}`}
                className="bg-white m-5 shadow-md shadow-slate-400"
              >
                <h2>{post.fields.title}</h2>
                <p>{post.fields.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
