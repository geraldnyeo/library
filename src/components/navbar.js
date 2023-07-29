import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row">
      <Link href="/home" className="grow text-center">
        Home
      </Link>
      <Link href="/about" className="grow text-center">
        About
      </Link>
      <Link href="/post" className="grow text-center">
        Posts
      </Link>
      <Link href="/showcase" className="grow text-center">
        Showcases
      </Link>
    </nav>
  );
}
