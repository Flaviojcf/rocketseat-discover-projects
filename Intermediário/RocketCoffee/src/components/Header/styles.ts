import styled from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 2rem;

`;

export const Content = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  width: 60%;
  min-width: 45rem;

  padding: 1rem;

  margin-bottom: auto;

  @media screen and (min-width: 1440px) {
    min-width: 87rem;
    width: 80%;
  }

  @media screen and (max-width: 1024px) {
    min-width: 18rem;
    border-bottom: 1px solid #29292e;
  }
`;

export const LogoContainer = styled.div`
  display: flex;

  > img:nth-child(1) {
    display: flex;
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  > img:nth-child(2) {
    display: none;
    @media screen and (max-width: 1024px) {
      display: flex;
    }
  }
`;

export const MenuHeaderContainer = styled.ul`
  display: flex;

  align-items: center;
  justify-content: space-between;

  font-family: Manrope;
  font-style: 400;
  font-size: 0.875rem;
  line-height: 19px;

  width: 50%;
  padding: 1rem;

  color: ${(props) => props.theme.colors["text-color"]};

  > li {
    cursor: pointer;
    transition: all ease 0.5s;

    &:hover {
      color: ${(props) => props.theme.colors.button};
    }
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const ButtonTakeCoffeContainer = styled.button`
  display: flex;

  padding: 0.6875rem 2.375rem;
  
  z-index: 9999;


  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  border: 2px solid ${(props) => props.theme.colors.button};
  border-radius: 6px;

  font-family: Manrope;
  font-style: 400;
  font-size: 0.6875rem;
  line-height: 15px;
  color: ${(props) => props.theme.colors["text-color"]};

  transition: all ease 0.5s;

  &:hover {
    background: ${(props) => props.theme.colors.button};
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const DropDownMenuRoot = styled(DropdownMenu.Root)`
  display: flex;
 

`;

export const DropDownMenuTrigger = styled(DropdownMenu.Trigger)`
  display: none;
  cursor: pointer;
  z-index: 9999 !important;

  >img {
    z-index: 9999 !important;
    cursor: pointer;
    border: 1px solid red;
  }

  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;

export const DropDownMenuContent = styled(DropdownMenu.Content)`
  display: flex;

  background: black;
  border-radius: 20px;

 

  margin-top: 3.5rem;
  margin-right: 1rem;

  width: 100vw;
  height: 100vh;

  z-index: 2;

  > ul {
    display: flex;

    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;

    > li {
      font-family: Manrope;
      font-style: 700;
      font-size: 1.125rem;
      line-height: 25px;

      width: 100%;

      padding: 1.5rem 0.5rem;

      color: ${(props) => props.theme.colors["text-color"]};
      border: 1px solid #29292e;

      cursor: pointer;

      &:hover {
        border-left: 3px solid ${(props) => props.theme.colors.button};
      }
    }
  }
`;
