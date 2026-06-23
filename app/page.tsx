import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="page-section">
        <h1>Week 3: Interactive Features</h1>
        <p>
          This page demonstrates two vanilla JavaScript interactions in a
          Next.js App Router project.
        </p>

        <div className="feature-grid">
          <article className="feature-card">
            <h2>Theme Toggle</h2>
            <p>
              Use the button in the header to switch between light and dark
              mode. The choice is saved in localStorage and follows you between
              pages.
            </p>
          </article>

          <article className="feature-card">
            <h2>Form Validation</h2>
            <p>
              The contact page validates required fields and email format with
              DOM events before showing a success message.
            </p>
          </article>
        </div>

        <p>
          <Link href="/contact">Open the contact page</Link>
        </p>
        <p>
          <Link href="/documentation">View project documentation</Link>
        </p>
      </section>
    </main>
  );
}
