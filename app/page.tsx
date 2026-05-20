import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ThemeToggle from "@/components/ThemeToggle";
import SkillCard from "@/components/SkillCard";

const skills = [
  {
    title: "HTML",
    description: "Semantic structure for accessible web pages.",
  },
  {
    title: "CSS",
    description: "Responsive styling, spacing, layout, and visual design.",
  },
  {
    title: "JavaScript",
    description: "Interactive behavior such as validation and events.",
  },
  {
    title: "React",
    description: "Component-based architecture with reusable UI sections.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <Nav />

      <main className="container">
        <section className="hero">
          <div>
            <p className="eyebrow">IT516 Web Information Systems</p>
            <h1>React Component-Based Portfolio</h1>
            <p>
              This project refactors my earlier HTML, CSS, and vanilla
              JavaScript website into a cleaner React and Next.js architecture.
            </p>
            <ThemeToggle />
          </div>

          <img
            src="https://tse2.mm.bing.net/th/id/OIP.ac8SS3sITKocmuoR_TWCNwAAAA?pid=Api&h=220&P=0"
            alt="Sample project visual"
            className="heroImage"
          />
        </section>

        <section className="section">
          <h2>About the Project</h2>
          <p>
            The goal of this website is to demonstrate semantic structure,
            responsive design, JavaScript interactivity, and React component
            architecture in one deployed project.
          </p>
        </section>

        <section className="section">
          <h2>Contact Form</h2>
          <ContactForm />
        </section>

        <section className="section">
          <h2>Skills Demonstrated</h2>
          <div className="grid">
            {skills.map((skill) => (
              <SkillCard
                key={skill.title}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}