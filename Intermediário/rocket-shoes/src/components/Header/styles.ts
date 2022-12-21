import styled from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const Container = styled.header`
  display: flex;

  z-index: 9;
  align-items: center;
  padding: 2.45rem 3.75rem;
  justify-content: space-between;


  > ul {
    display: flex;
    align-items: center;
    gap: 5.625rem;

    @media screen and (max-width: 1024px) {
      display: none;
    }

    > li {
      font-family: Roboto;
      font-style: 700;
      font-size: 24px;
      line-height: 28px;

      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media screen and (max-width: 1024px) {
     padding: 2.45rem 1.5rem;
    }

    @media screen and (max-width: 320px) {
     padding: 2.45rem 0.5rem;
    }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;

  height: 2.8125rem;
  width: 13.75rem;

  border: 1px solid black;
  position: relative;

  > img {
    position: absolute;
    z-index: 2;
    padding-left: 0.5rem;
    cursor: pointer;
  }

  > input {
    width: 100%;
    height: 100%;

    position: absolute;
    border: none;

    padding-left: 2.5rem;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const ImageBagContainer = styled.div`
  display: flex;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const StoreNameContainer = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    color: ${(props) => props.theme.colors.button};
  }
`;

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
