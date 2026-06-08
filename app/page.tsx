import Link from "next/link";
import { createMessage } from "./actions";

export default function ContactPage() {
  return (
    <main>
      <section className="page-section">
        <h1>Week 8: Contact Form</h1>
        <p>
          This form saves messages to a PostgreSQL database using a Next.js
          Server Action and Prisma.
        </p>

        <form action={createMessage} className="contact-form">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />

          <label htmlFor="body">Message</label>
          <textarea id="body" name="body" rows={5} required />

          <button type="submit">Submit Message</button>
        </form>

        <p>
          <Link href="/messages">View submitted messages</Link>
        </p>
      </section>
    </main>
  );
}
