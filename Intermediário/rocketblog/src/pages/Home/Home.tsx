import { Header } from "../../components/Header/Header";
import { Main } from "../../components/Main/Main";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}
