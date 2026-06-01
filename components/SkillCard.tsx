type SkillCardProps = {
  title: string;
  description: string;
};

export default function SkillCard({ title, description }: SkillCardProps) {
  return (
    <article className="skillCard">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}