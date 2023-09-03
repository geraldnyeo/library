import Link from "next/link";

import { getPage } from "/src/utils.js";

export default async function Index() {
  const content = await getPage("landingPage");

  return (
    <main className="flex flex-col justify-between p-24 min-h-screen">
      <div
        id="landing"
        className="flex flex-col items-center justify-center grow"
      >
        <p id="text-one" className="text-center my-5">
          {content.fields.text1}
        </p>

        <p id="text-two" className="text-center my-5">
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
