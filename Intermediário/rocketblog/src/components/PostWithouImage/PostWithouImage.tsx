import { Container } from "./styles";

interface PostWithoutImageProps {
  title: string;
}

export function PostWithouImage({ title }: PostWithoutImageProps) {
  return (
    <Container>
      <p>Janeiro 04, 2022</p>
      <h1>{title}</h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in
        aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed
        tristique.
      </h2>
    </Container>
  );
}
