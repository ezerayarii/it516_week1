"use client";

declare global {
  interface Window {
    week3ContactFormReady?: boolean;
  }
}

function setupContactFormValidation() {
  if (typeof window === "undefined" || window.week3ContactFormReady) {
    return;
  }

  window.week3ContactFormReady = true;

  document.addEventListener("submit", (event) => {
    const form = event.target;

    if (!(form instanceof HTMLFormElement) || form.id !== "week3-contact-form") {
      return;
    }

    event.preventDefault();

    const status = document.getElementById("week3-form-status");

    if (!status) {
      return;
    }

    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const emailInput = document.getElementById("week3-email");
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    status.className = "form-error";

    if (!name || !email || !message) {
      status.textContent = "Please complete name, email, and message.";
      return;
    }

    if (emailInput instanceof HTMLInputElement && !emailInput.validity.valid) {
      status.textContent = "Please enter a valid email address.";
      return;
    }

    status.className = "form-success";
    status.textContent = `Thanks, ${name}. Your message is ready to send.`;
    form.reset();
  });

  document.addEventListener("input", (event) => {
    const field = event.target;

    if (
      field instanceof HTMLElement &&
      field.closest("#week3-contact-form")
    ) {
      const status = document.getElementById("week3-form-status");

      if (status?.textContent) {
        status.textContent = "";
        status.className = "form-status";
      }
    }
  });
}

if (typeof window !== "undefined") {
  setupContactFormValidation();
}

export default function Week3ContactForm() {
  return (
    <form className="contact-form" id="week3-contact-form" noValidate>
      <label htmlFor="week3-name">Name</label>
      <input id="week3-name" name="name" required type="text" />

      <label htmlFor="week3-email">Email</label>
      <input id="week3-email" name="email" required type="email" />

      <label htmlFor="week3-message">Message</label>
      <textarea id="week3-message" name="message" required rows={5} />

      <p
        aria-live="polite"
        className="form-status"
        id="week3-form-status"
        role="alert"
      />

      <button type="submit">Check Form</button>
    </form>
  );
}
