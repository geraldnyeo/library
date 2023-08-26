import Link from "next/link";

export default async function Index() {
  return (
    <main className="flex flex-col justify-between p-24 min-h-screen">
      <div
        id="landing"
        className="flex flex-col items-center justify-center grow"
      >
        <p id="text-one" className="text-center my-5">
          TEXT ONE: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        </p>

        <p id="text-two" className="text-center my-5">
          TEXT TWO: do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
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
