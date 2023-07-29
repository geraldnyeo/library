import Link from "next/link";

export default async function Index() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div id="landing" className="flex flex-col items-center">
        <p id="text-one" className="text-center m-3f">
          TEXT ONE: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        </p>

        <p id="text-two" className="text-center m-3">
          TEXT TWO: do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>

        <Link href="/home" className="flex-end m-3">
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
