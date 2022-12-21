import { Header } from "../../components/Header/Header";
import { Main } from "../../components/Main/Main";
import {
  Container,
  RightToptBlurContainer,
  LeftBottomBlurContainer,
  BottomBlurMobileContainer,
} from "./styles";

export function Home() {
  return (
    <Container>
      <RightToptBlurContainer></RightToptBlurContainer>
      <LeftBottomBlurContainer></LeftBottomBlurContainer>
      <BottomBlurMobileContainer></BottomBlurMobileContainer>
      <Header />
      <Main/>
    </Container>
  );
}
