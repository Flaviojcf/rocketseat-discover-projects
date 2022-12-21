import { ImageContainer } from "../../components/ImageContainer/ImageContainer";
import { SideContainer } from "../../components/SideContainer/SideContainer";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <SideContainer />
      <ImageContainer/>

    </Container>
  );
}
