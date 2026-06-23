import Link from "next/link";

const checklistItems = [
  "Secondary page and navigation are implemented with the Next.js App Router.",
  "Theme toggle uses vanilla JavaScript, DOM events, and localStorage.",
  "Contact form saves messages through a server action, Prisma, and PostgreSQL.",
  "Messages page reads and displays the latest 20 database records.",
  "Prisma client is generated during build with the package.json build scripts.",
];

export default function DocumentationPage() {
  return (
    <main className="documentation-page">
      <section className="documentation-hero">
        <p className="eyebrow">IT516 Project Documentation</p>
        <h1>Website Features, Backend, and Testing Guide</h1>
        <p>
          This page gives a quick grading overview of the project structure,
          interactive features, database integration, and the exact pages to
          test.
        </p>
        <div className="doc-actions">
          <Link href="/contact">Test Contact Form</Link>
          <Link href="/messages">View Saved Messages</Link>
        </div>
      </section>

      <section className="doc-section">
        <h2>Project Overview</h2>
        <p>
          This is a Next.js App Router project for IT516 Web Information
          Systems. It includes client-side interactivity, a database-backed
          contact form, and a server-rendered messages page.
        </p>
        <div className="doc-grid">
          <article className="doc-card">
            <h3>Frontend</h3>
            <p>
              Pages are built with semantic HTML, shared CSS, responsive layout,
              and accessible controls.
            </p>
          </article>
          <article className="doc-card">
            <h3>Interactivity</h3>
            <p>
              The theme toggle uses browser events and localStorage to persist
              light or dark mode across pages.
            </p>
          </article>
          <article className="doc-card">
            <h3>Backend</h3>
            <p>
              The contact form uses a Next.js server action, Prisma, and
              PostgreSQL to save submitted messages.
            </p>
          </article>
        </div>
      </section>

      <section className="doc-section">
        <h2>Pages to Review</h2>
        <div className="route-list">
          <Link href="/">Home: interactive features overview</Link>
          <Link href="/contact">Contact: database form submission</Link>
          <Link href="/messages">Messages: latest saved database records</Link>
          <Link href="/documentation">Documentation: grading guide</Link>
        </div>
      </section>

      <section className="doc-section">
        <h2>Database Schema</h2>
        <p>
          The PostgreSQL database stores contact submissions in a single
          <code>Message</code> model.
        </p>
        <pre className="code-block">
          <code>{`model Message {
  id        Int      @id @default(autoincrement())
  name      String
  email     String
  body      String
  createdAt DateTime @default(now())
}`}</code>
        </pre>
      </section>

      <section className="doc-section">
        <h2>Grading Checklist</h2>
        <ul className="checklist">
          {checklistItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="doc-section">
        <h2>How to Test</h2>
        <ol className="test-steps">
          <li>Open the contact page and submit a name, email, and message.</li>
          <li>Confirm the form shows a success message.</li>
          <li>Open the messages page and confirm the new message appears.</li>
          <li>Use the theme button in the header and confirm the setting stays.</li>
        </ol>
      </section>
    </main>
  );
}
