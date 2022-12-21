import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  > h1 {
    font-family: Manrope;
    font-style: 700;
    font-size: 5rem;
    line-height: 109px;
    color: ${(props) => props.theme.colors["text-color"]};
  }

  > h2 {
    font-family: Manrope;
    font-style: 700;
    font-size: 5rem;
    line-height: 109px;

    text-shadow: -1px -1px 0 ${(props) => props.theme.colors.button},
      1px -1px 0 ${(props) => props.theme.colors.button},
      -1px 1px 0 ${(props) => props.theme.colors.button},
      1px 1px 0 ${(props) => props.theme.colors.button};
  }
  @media screen and (max-width: 1024px) {
    > h1,
    h2 {
      font-size: 3rem;
    }
    > h2 {
      margin-top: -3rem;
    }
  }

  @media screen and (max-width: 425px) {
    > h1,
    h2 {
      font-size: 2rem;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;

  > img {
    max-width: 44rem;
    max-height: 36rem;
  }


  @media screen and (min-width: 1920px) {
    > img {
      max-width: 61.85rem;
      max-height: 58rem;
    }
  }

  
  @media screen and (min-width: 2560px) {
    > img {
      max-width: 80rem;
      max-height: 70rem;
    }
  }

  @media screen and (max-width: 768px) {
    > img {
      max-width: 20rem;
      max-height: 15rem;
    }
  }
`;

export const TextContainer = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    > p {
      font-family: Manrope;
      font-style: 700;
      font-size: 1.875rem;
      line-height: 41x;
      color: ${(props) => props.theme.colors["text-color"]};
    }
  }
`;
