import {
  Container,
  MainContainer,
  ImageContainer,
  FormContainer,
  LogoImageContainer,
  TitleFormContainer,
  FormContent,
  EmailContainer,
  PasswordContainer,
  ForgetPasswordContainer,
  ButtonContainer,
  RegisterContainer,
} from "./styles";

export function Main() {
  return (
    <Container>
      <MainContainer>
        <LogoImageContainer>
          <img src="logo.svg" />
        </LogoImageContainer>
        <FormContainer>
          <TitleFormContainer>
            <h1>
              <img src="log-in.svg" /> Faça seu login
            </h1>
            <h2>Entre com suas informações de cadastro.</h2>
          </TitleFormContainer>
          <FormContent>
            <EmailContainer>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" placeholder="Digite seu e-mail" />
            </EmailContainer>
            <PasswordContainer>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="Digite sua senha"
              />
            </PasswordContainer>
            <ForgetPasswordContainer>
              <div>
                <input type="checkbox" id="rememberPassword" />
                <label htmlFor="rememberPassword">Lembre-me</label>
              </div>
              <p>Esqueci minha senha</p>
            </ForgetPasswordContainer>
            <ButtonContainer>
              <strong>ENTRAR</strong>
            </ButtonContainer>
            <RegisterContainer>
              <p>
                Não tem uma conta? <strong>Registre-se</strong>
              </p>
            </RegisterContainer>
          </FormContent>
        </FormContainer>
      </MainContainer>
      <ImageContainer>
        <img src="sideImage.png" />
      </ImageContainer>
    </Container>
  );
}
