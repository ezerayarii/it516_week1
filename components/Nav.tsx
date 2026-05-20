import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/">Home</Link>
      <Link href="#contact">Contact</Link>
      <Link href="#skills">Skills</Link>
    </nav>
  );
}