import { Container, MoreContainer } from "./styles";

export function Footer() {
  return (
    <Container>
      <img src="video.png"/>
      <ul>
        <li>FACEBOOK</li>
        <li>INSTAGRAM</li>
        <li>YOUTUBE</li>
        <li>TWITTER</li>
      </ul>
      <MoreContainer>
        <p>EXPLORE MAIS</p>
        <img src="arrow.svg"/>
      </MoreContainer>
    </Container>
  );
}
