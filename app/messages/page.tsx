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
      <section className="page-section">
        <h1>Latest Messages</h1>
        <p>The newest 20 contact form messages are shown below.</p>

        {databaseError ? (
          <p className="form-error" role="alert">
            {databaseError}
          </p>
        ) : messages.length === 0 ? (
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
