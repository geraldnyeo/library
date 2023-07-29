import Link from "next/link";

import { getShowcases } from "/src/utils.js";

export default async function Showcase() {
  const showcases = await getShowcases();

  return (
    <main className="flex flex-col m-5">
      <h1>Showcases</h1>
      <hr />

      <div>
        {showcases.map((showcase) => (
          <Link href={`/showcase/${showcase.sys.id}`}>
            <div>
              <h2>{showcase.fields.title}</h2>
              <p>{showcase.fields.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
