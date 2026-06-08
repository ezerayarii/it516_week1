import Link from "next/link";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <main>
      <section className="page-section">
        <h1>Week 8: Contact Form</h1>
        <p>
          This form saves messages to a PostgreSQL database using a Next.js
          Server Action and Prisma.
        </p>

        <ContactForm />

        <p>
          <Link href="/messages">View submitted messages</Link>
        </p>
      </section>
    </main>
  );
}
