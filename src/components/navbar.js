import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row m-3 justify-center gap-x-5">
      <Link href="/about" className="text-right">
        <p className="navlink">About Me</p>
      </Link>
      <p className="text-yellow-300">•</p>
      <Link href="/home" className="text-left">
        <p className="navlink">My Work</p>
      </Link>
    </nav>
  );
}
