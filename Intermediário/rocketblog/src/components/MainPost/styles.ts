import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > img {
    width: 35rem;
  }

  > p {
    font-family: Roboto;
    font-style: 400;
    font-size: 1rem;
    line-height: 19px;
    color: black;
  }

  > h1 {
    font-family: Roboto;
    font-style: 700;
    font-size: 1.5rem;
    line-height: 36px;
    color: ${(props) => props.theme.colors["purple-bg"]};
  }
  > h2 {
    font-family: Roboto;
    font-style: 400;
    font-size: 1rem;
    line-height: 24px;
    color: black;

    width: 50%;
  }

  @media screen and (max-width: 1410px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    > img {
      min-width: 18rem;
      width: 100%;
    }

    > h2 {
      width: 100%;
    }
  }
`;

export const GridPost = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
  margin-top: 4rem;

  > img {
    width: 23rem;
  }

  > p {
    font-family: Roboto;
    font-style: 400;
    font-size: 1rem;
    line-height: 19px;
    color: black;
  }

  > h1 {
    font-family: Roboto;
    font-style: 700;
    font-size: 1.5rem;
    line-height: 36px;
    color: ${(props) => props.theme.colors["purple-bg"]};
  }
  > h2 {
    font-family: Roboto;
    font-style: 400;
    font-size: 1rem;
    line-height: 24px;
    color: black;
  }

  @media screen and (max-width: 768px) {
    > img {
      min-width: 18rem;
      width: 100%;
    }
  }

  @media screen and (max-width: 1410px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
