import { Card, Container } from '@components/common';

export default function Home() {
  return (
    <Container>
      <Card>
        <h2 className="text-2xl sm:text-3xl mb-4 font-semibold">
          ~ Hi, I&apos;m Irfan 👋
        </h2>
        <p>= I am full-stack Javascript/Typescript Engineer</p>
        <p>= I love Node JS and Typescript</p>
      </Card>
      <Card>
        <p>This website is under development :)</p>
      </Card>
    </Container>
  );
}
