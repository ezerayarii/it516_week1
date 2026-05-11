"use client";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (name === "" || email === "") {
      setMessage("Please fill all fields.");
    } else {
      setMessage("Form submitted successfully!");
    }
  }

  return (
    <main className={darkMode ? "dark" : ""}>
  <Header />
<Nav />


      <img
        src="https://tse2.mm.bing.net/th/id/OIP.ac8SS3sITKocmuoR_TWCNwAAAA?pid=Api&h=220&P=0"
        alt="Sample"
      />

      <section>
        <h2>About Me</h2>
        <p>Hello, my name is Ezer. This is my first React web project.</p>

        <button onClick={() => setDarkMode(!darkMode)}>
          Toggle Dark Mode
        </button>
      </section>

      <section>
        <h2>Contact Form</h2>

        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your Name"
            aria-label="Name"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your Email"
            aria-label="Email"
          />

          <button type="submit">Submit</button>
        </form>

        <p className={message.includes("successfully") ? "success" : "error"}>
          {message}
        </p>
      </section>

      <section>
        <h2>My Skills</h2>
<ul>
  <Card title="HTML" />
  <Card title="CSS" />
  <Card title="JavaScript" />
  <Card title="React" />
  <Card title="GitHub" />
</ul>
      </section>

<Footer />
    </main>
  );
}