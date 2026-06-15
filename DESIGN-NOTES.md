# Design Notes

## Week 8: Database & Backend

This project uses PostgreSQL as the database because it is a reliable relational database and works well with Vercel-hosted web applications. PostgreSQL stores the contact form submissions so the data stays available after the page refreshes or the user leaves the site.

Prisma is used as the Object Relational Mapper for the project. Prisma lets the Next.js application work with the database using TypeScript instead of writing raw SQL for every query.

The database schema includes one model:

```prisma
model Message {
  id        Int      @id @default(autoincrement())
  name      String
  email     String
  body      String
  createdAt DateTime @default(now())
}
```

The `Message` table stores the visitor name, email address, message body, and the time the message was created. The contact form sends data to a Next.js Server Action in `app/actions.ts`. The Server Action validates that name, email, and body are present, then saves the record with Prisma. The `/messages` page is a Server Component that reads the latest 20 messages from PostgreSQL and renders them on the server.
# Week 9: Authentication, Security & Performance

## Authentication

Auth.js (NextAuth v5) was implemented using GitHub OAuth authentication.

Users can:

- Sign in using GitHub.
- Access protected content.
- Sign out securely.

A protected dashboard page was created to demonstrate server-side route protection.

## Security

Two OWASP Top 10 mitigations were implemented:

1. Security Misconfiguration (A05)
   - Added security headers.
   - Configured CSP and Referrer Policy.

2. Identification and Authentication Failures (A07)
   - Added Auth.js authentication.
   - Stored secrets in environment variables.
   - Implemented secure session handling.

## Performance Improvements

Two Lighthouse recommendations were implemented:

1. Added Next.js Image Optimization.
2. Added width and height attributes to images to reduce CLS.

These changes improved overall Lighthouse scores and user experience.

## Analytics

Vercel Speed Insights and Analytics were enabled to monitor real-world user performance metrics.