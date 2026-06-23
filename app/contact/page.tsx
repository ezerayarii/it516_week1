import Link from "next/link";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <main>
      <section className="page-section">
        <h1>Contact</h1>
        <p>
          Submit a message below. The form saves your name, email, and message
          to the PostgreSQL database using Prisma.
        </p>

        <ContactForm />

        <p>
          <Link href="/messages">View saved messages</Link>
        </p>
      </section>
    </main>
  );
}
