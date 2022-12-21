import {
  Container,
  FormContainer,
  InformationContainer,
  LetMeReadContainer,
  LogoContainer,
} from "./styles";

export function SideContainer() {
  return (
    <Container>
      <LogoContainer>
        <img src="logo.png" alt="" />
      </LogoContainer>
      <InformationContainer>
        <h2>atualize ideias e informações em 5 minutos.</h2>
        <h3>
          tudo que você precisa saber para começar seu dia bem e informado
        </h3>
        <p>
          noticias sobre o universo Rocketseat, e tudo o que precisa para
          começar o dia melhor. perfeito para se preparar para codar ☕
        </p>
      </InformationContainer>
      <FormContainer>
        <h3>Insira seu email</h3>

        <div>
          <input type="text" placeholder="oi@rocketseat.com" />
          <div>
            <img src="arrow.png" />
          </div>
        </div>

        <LetMeReadContainer>
          <h5>deixe-me ler primeiro</h5>
          <img src="arrow-right.png" />
        </LetMeReadContainer>
      </FormContainer>
    </Container>
  );
}
