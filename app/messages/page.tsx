import Link from "next/link";
import type { Message } from "@prisma/client";
import { getPrisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function MessagesPage() {
  let messages: Message[] = [];
  let databaseError = "";

  try {
    const prisma = getPrisma();

    messages = await prisma.message.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 20,
    });
  } catch (error) {
    console.error("Unable to load messages:", error);
    databaseError =
      "Messages could not be loaded. Check DATABASE_URL and run prisma db push.";
  }

  return (
    <main>
      <section className="page-section messages-hero">
        <p className="eyebrow">Database Records</p>
        <h1>Contact Form Submissions</h1>
        <p>
          This page shows the latest messages saved from the contact form using
          a Next.js server action, Prisma, and PostgreSQL.
        </p>

        {databaseError ? (
          <p className="form-error" role="alert">
            {databaseError}
          </p>
        ) : messages.length === 0 ? (
          <div className="empty-state">
            <h2>No messages yet</h2>
            <p>
              Submit the contact form to create the first database record.
            </p>
            <Link href="/contact">Go to contact form</Link>
          </div>
        ) : (
          <div className="message-list">
            {messages.map((message) => (
              <article className="message-card" key={message.id}>
                <div className="message-card-header">
                  <div>
                    <h2>{message.name}</h2>
                    <p className="message-meta">{message.email}</p>
                  </div>
                  <time dateTime={message.createdAt.toISOString()}>
                    {message.createdAt.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <p>{message.body}</p>
              </article>
            ))}
          </div>
        )}

        <div className="message-actions">
          <Link href="/contact">Submit another message</Link>
          <Link href="/documentation">View documentation</Link>
        </div>
      </section>
    </main>
  );
}
