import { AdContainer } from "../../components/AdContainer/AdContainer";
import { AdModel } from "../../components/AdModel/AdModel";
import { Header } from "../../components/Header/Header";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <AdContainer />
    </Container>
  );
}
