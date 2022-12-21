import { MainContent } from "../../components/MainContent/MainContent";
import { SideContent } from "../../components/SideContent/SideContent";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <SideContent />
      <MainContent />
    </Container>
  );
}
