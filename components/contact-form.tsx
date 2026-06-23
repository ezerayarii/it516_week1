"use client";

import Link from "next/link";
import { useActionState } from "react";
import { createMessage, type MessageFormState } from "@/app/actions";

const initialState: MessageFormState = {};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    createMessage,
    initialState,
  );

  return (
    <form action={formAction} className="contact-form">
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" required />

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required />

      <label htmlFor="body">Message</label>
      <textarea id="body" name="body" rows={5} required />

      {state.error ? (
        <p className="form-error" role="alert">
          {state.error}
        </p>
      ) : null}

      {state.success ? (
        <p className="form-success">
          {state.success} <Link href="/messages">View it on the messages page.</Link>
        </p>
      ) : null}

      <button disabled={isPending} type="submit">
        {isPending ? "Saving..." : "Submit Message"}
      </button>
    </form>
  );
}
