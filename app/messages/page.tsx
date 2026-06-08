import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function MessagesPage() {
  const messages = await prisma.message.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 20,
  });

  return (
    <main>
      <section className="page-section">
        <h1>Latest Messages</h1>
        <p>The newest 20 contact form messages are shown below.</p>

        {messages.length === 0 ? (
          <p>No messages have been submitted yet.</p>
        ) : (
          <div className="message-list">
            {messages.map((message) => (
              <article className="message-card" key={message.id}>
                <h2>{message.name}</h2>
                <p className="message-meta">
                  {message.email} |{" "}
                  {message.createdAt.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <p>{message.body}</p>
              </article>
            ))}
          </div>
        )}

        <p>
          <Link href="/">Back to contact form</Link>
        </p>
      </section>
    </main>
  );
}
