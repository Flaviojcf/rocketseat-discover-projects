import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  Container,
  DropDownMenuContent,
  DropDownMenuTrigger,
  HeaderMenuContainer,
  ImageContainer,
  InputContainer,
  LogoContainer,
  RoutesContainer,
  TextAndImageContainer,
  TextContainer,
} from "./styles";

export function Header() {
  return (
    <Container>
      <HeaderMenuContainer>
        <LogoContainer>
          <img src="logo.svg" />
        </LogoContainer>
        <RoutesContainer>
          <li>Home</li>
          <li>Sobre</li>
          <li>Categorias</li>
          <li>Contato</li>
        </RoutesContainer>
        <InputContainer>
          <input type="text" placeholder="Buscar" />
          <div>
            <img src="search.svg" />
          </div>
        </InputContainer>
        <DropdownMenu.Root>
          <DropDownMenuTrigger asChild>
            <img src="menu.svg" />
          </DropDownMenuTrigger>
          <DropDownMenuContent>
            <ul>
              <li>Home</li>
              <li>Sobre</li>
              <li>Categorias</li>
              <li>Contato</li>
            </ul>
          </DropDownMenuContent>
        </DropdownMenu.Root>
      </HeaderMenuContainer>
      <TextAndImageContainer>
        <TextContainer>
          <h1>
            Veja o guia definitivo para conquistar seus objetivos como DEV em
            2022
          </h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
            eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
            sed tristique placerat hac.{" "}
          </h2>
          <p>
            Veja mais
            <img src="arrow-right.svg" />
          </p>
        </TextContainer>
        <ImageContainer>
          <img src="featured-image.png" />
        </ImageContainer>
      </TextAndImageContainer>
    </Container>
  );
}
