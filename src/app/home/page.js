import Link from "next/link";

import { getPosts, getShowcases } from "/src/utils.js";

async function Home() {
  // no. of items per shelf
  const per_shelf = 3; // change to be based on viewport width

  const showcases = await getShowcases();
  let showcase_list = [];

  // group showcases into shelves
  let last = 0;
  for (let i = 0; i < parseInt(showcases.length / per_shelf); i++) {
    showcase_list.push(showcases.slice(i * per_shelf, (i + 1) * per_shelf));
    last++;
  }
  showcase_list.push(showcases.slice(last * per_shelf, (last + 1) * per_shelf));

  // Get first 6 posts sorted by date
  const posts = await getPosts();
  const post_list = posts.slice(0, 6);

  return (
    <main className="flex min-h-screen flex-col">
      <div id="signboard">
        <h1>Welcome!</h1>
      </div>

      <div id="showcase-shelf" className="grid grid-cols-3">
        {showcase_list.map((shelf_list, index) => {
          return (
            <>
              {shelf_list.map((showcase) => (
                <Link
                  href={`/showcase/${showcase.sys.id}`}
                  key={showcase.sys.id}
                  className="flex grow justify-center"
                >
                  <div
                    id={`showcase-${showcase.sys.id}`}
                    className="bg-yellow-300 m-5 shadow-md shadow-slate-400 w-32 h-48 text-center"
                  >
                    <h2>{showcase.fields.title}</h2>
                  </div>
                </Link>
              ))}
              <div className="col-span-3 flex flex-row h-0 mt-1">
                <img src="/images/left_block.png" className="h-14 self-end" />
                <div className="shelf-plank grow self-end"></div>
                <img src="/images/right_block.png" className="h-14 self-end" />
              </div>
            </>
          );
        })}
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
