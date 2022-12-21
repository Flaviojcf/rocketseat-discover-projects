import {
  Container,
  ImageContainer,
  TextContainer,
  TitleContainer,
} from "./styles";

export function Main() {
  return (
    <Container>
      <TextContainer>
        <p>O café que fará seu código decolar para o próximo nível.</p>
      </TextContainer>
      <TitleContainer>
        <h1>Great Coffee</h1>
        <h2>&lt;Great Code/&gt;</h2>
      </TitleContainer>

      <ImageContainer>
        <img src="coffee.png" />
      </ImageContainer>
    </Container>
  );
}
