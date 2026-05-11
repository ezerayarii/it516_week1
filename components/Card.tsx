type Props = {
  title: string;
};

export default function Card({ title }: Props) {
  return <li>{title}</li>;
}