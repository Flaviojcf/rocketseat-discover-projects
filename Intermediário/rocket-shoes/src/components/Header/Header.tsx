import {
  Container,
  DropDownMenuContent,
  DropDownMenuTrigger,
  ImageBagContainer,
  InputContainer,
  StoreNameContainer,
} from "./styles";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export function Header() {
  return (
    <Container>
      <img src="logo.svg" />
      <StoreNameContainer>
        <h1>RocketShoes</h1>
      </StoreNameContainer>
      <ul>
        <li>HOMEM</li>
        <li>MULHER</li>
        <li>CRIANÇA</li>
        <li>CUSTOMIZAR</li>
      </ul>
      <InputContainer>
        <img src="lupa.svg" />
        <input type="text" placeholder="Pesquisar" />
      </InputContainer>

      <ImageBagContainer>
        <img src="bag.svg" />
      </ImageBagContainer>

      <DropdownMenu.Root>
        <DropDownMenuTrigger asChild>
          <img src="menu.svg" alt="" />
        </DropDownMenuTrigger>
        <DropDownMenuContent>
          <ul>
            <li>HOMEM</li>
            <li>MULHER</li>
            <li>CRIANÇA</li>
            <li>CUSTOMIZAR</li>
          </ul>
        </DropDownMenuContent>
      </DropdownMenu.Root>
    </Container>
  );
}
