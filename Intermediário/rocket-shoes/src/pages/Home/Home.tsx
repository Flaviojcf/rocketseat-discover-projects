import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Shoes } from "../../components/Shoes/Shoes";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
        <Header/>
        <Shoes/>
        <Footer/>
    </Container>
  );
}
