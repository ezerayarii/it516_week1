import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="site-title" href="/">
          IT516 Week 3
        </Link>
        <nav aria-label="Main navigation" className="site-nav">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/messages">Messages</Link>
          <Link href="/documentation">Docs</Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
