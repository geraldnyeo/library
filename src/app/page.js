import Link from "next/link";

import { getPage } from "/src/utils.js";

export default async function Index() {
  const content = await getPage("landingPage");

  return (
    <main className="flex flex-col justify-between px-12 py-36 min-h-screen">
      <div id="landing" className="flex flex-col items-center grow">
        <p
          id="text-one"
          className="inline-block text-center align-middle my-5 grow"
        >
          {content.fields.text1}
        </p>

        <p
          id="text-two"
          className="inline-block text-center align-middle my-5 grow"
        >
          {content.fields.text2}
        </p>

        <Link href="/home" className="my-5">
          <div id="door">
            <div id="doorfront">
              <div id="doorknob"></div>
            </div>
            <div id="doorframe"></div>
          </div>
        </Link>
      </div>
    </main>
  );
}
