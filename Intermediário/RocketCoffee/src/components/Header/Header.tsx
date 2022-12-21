import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import {
  ButtonTakeCoffeContainer,
  Container,
  Content,
  DropDownMenuContent,
  DropDownMenuRoot,
  DropDownMenuTrigger,
  LogoContainer,
  MenuHeaderContainer,
} from "./styles";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log(isMenuOpen);
  return (
    <Container>
      <Content>
        <LogoContainer>
          <img src="/logo.svg" />
          <img src="logoMobile.svg" />
        </LogoContainer>
        <MenuHeaderContainer>
          <li>Home</li>
          <li>Menu</li>
          <li>Recompensas</li>
          <li>Gift Cards</li>
        </MenuHeaderContainer>
        <ButtonTakeCoffeContainer>PEGAR MEU CAFÉ</ButtonTakeCoffeContainer>

        <DropDownMenuRoot>
          <DropDownMenuTrigger asChild onClick={()=>console.log("oi")} >
            <img onClick={()=>setIsMenuOpen(!isMenuOpen)}src={!isMenuOpen ? "menuRocketCoffe.svg" : "close.png"} />
          </DropDownMenuTrigger>
          <DropDownMenuContent>
            <ul>
              <li>Home</li>
              <li>Menu</li>
              <li>Recompensas</li>
              <li>Gift Cards</li>
            </ul>
          </DropDownMenuContent>
        </DropDownMenuRoot>
      </Content>
    </Container>
  );
}
