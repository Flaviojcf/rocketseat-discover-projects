import styled from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.colors["purple-bg"]};
  border-bottom: 6px solid ${(props) => props.theme.colors.green};

  height: 36rem;
  width: 100%;
  padding: 4rem 4rem;

  gap: 2rem;
`;

export const HeaderMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 14rem;
`;

export const LogoContainer = styled.div`
  display: flex;
`;

export const RoutesContainer = styled.ul`
  display: flex;
  justify-content: space-between;

  align-items: center;
  min-width: 22rem;

  > li:first-child {
    border-left: 2px solid ${(props) => props.theme.colors.green};
    padding-left: 0.25rem;
  }

  > li {
    cursor: pointer;

    font-family: Roboto;
    font-style: 400;
    font-size: 1.125rem;
    line-height: 21px;
    color: white;

    transition: all ease 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 2.75rem;

  > input {
    height: 100%;
    border: none;
    padding-left: 1rem;
    background: ${(props) => props.theme.colors["dark-bg"]};
    color: white;

    &::placeholder {
      font-family: Roboto;
      font-style: 400;
      font-size: 0.875rem;
      line-height: 16px;
      color: white;
    }

    &:focus {
      outline: 0;
    }
  }

  > div {
    height: 100%;
    min-width: 4.35rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.colors["button-bg"]};

    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const TextAndImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  height: 100%;

  @media screen and (max-width: 1024px) {
    > h1,
    h2 {
      width: 100% !important;
    }
    > p {
      align-self: center;
    }
  }

  @media screen and (max-width: 425px) {
    text-align: center;

    > h1 {
      font-size: 1.5rem !important;
    }
    > h2 {
      display: none;
    }
  }

  > h1 {
    font-family: Roboto;
    font-style: 400;
    font-size: 2.25rem;
    line-height: 54px;
    color: ${(props) => props.theme.colors["button-bg"]};

    width: 28rem;
  }

  > h2 {
    font-family: Roboto;
    font-style: 400;
    font-size: 1.125rem;
    line-height: 27px;
    color: ${(props) => props.theme.colors["light-purple"]};

    width: 28rem;
  }

  > p {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-family: Roboto;
    font-style: 400;
    font-size: 1.125rem;
    line-height: 27px;
    color: ${(props) => props.theme.colors["button-bg"]};

    cursor: pointer;
    transition: all ease 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  height: 100%;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

// Radix DropDownMenu

export const DropDownMenuTrigger = styled(DropdownMenu.Trigger)`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;

export const DropDownMenuContent = styled(DropdownMenu.Content)`
  display: flex;

  background: white;
  border-radius: 20px;
  padding: 1rem;
  margin-top: 1rem;
  margin-right: 1rem;

  > ul {
    display: flex;

    flex-direction: column;
    align-items: center;
    gap: 1.25rem;

    > li {
      font-family: Roboto;
      font-style: 400;
      font-size: 16px;
      line-height: 16px;

      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
