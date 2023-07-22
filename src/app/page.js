import Link from "next/link";

export default async function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id="landing" className="flex flex-col items-center">
        <p>TEXT HERE</p>
        <Link href="/home">
          <div id="door">
            <div id="doorfront">
              <div id="doorknob"></div>
            </div>
            <div id="doorframe"></div>
          </div>
        </Link>
      </div>

      <div id="transition">
        <p>TEXT HERE</p>
      </div>
    </main>
  );
}
