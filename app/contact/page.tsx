import Week3ContactForm from "@/components/week3-contact-form";

export default function ContactPage() {
  return (
    <main>
      <section className="page-section">
        <h1>Contact</h1>
        <p>
          This secondary page uses a vanilla JavaScript form validation feature.
          The form checks required fields and email format before showing a
          success message.
        </p>

        <Week3ContactForm />
      </section>
    </main>
  );
}
