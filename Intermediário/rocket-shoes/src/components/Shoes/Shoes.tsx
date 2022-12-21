import { Container, DescriptionContainer, ImagesContainer } from "./styles";

export function Shoes() {
  return (
    <Container>
      <DescriptionContainer>
        <h1>Tênis Esportivo Para Corrida Top</h1>
        <p>
          Esse tênis tem o intuito de te deixar ainda mais fitness, focado, e
          musculoso.
        </p>
        <h2>R$ 1.000,00</h2>
        <button>COMPRAR</button>
      </DescriptionContainer>
      <ImagesContainer>
        <img src="shoes1.png" />
        <div>
          <img src="shoes2.png" />
          <img src="shoes3.png" />
          <img src="shoes4.png" />
        </div>
      </ImagesContainer>
    </Container>
  );
}
