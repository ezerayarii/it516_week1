"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setMessage("Please fill out all fields before submitting.");
      return;
    }

    setMessage("Form submitted successfully!");
  }

  return (
    <form className="form" onSubmit={handleSubmit} id="contact">
      <label>
        Name
        <input
          type="text"
          value={name}
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Email
        <input
          type="email"
          value={email}
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <button type="submit">Submit</button>

      {message && (
        <p className={message.includes("successfully") ? "success" : "error"}>
          {message}
        </p>
      )}
    </form>
  );
}