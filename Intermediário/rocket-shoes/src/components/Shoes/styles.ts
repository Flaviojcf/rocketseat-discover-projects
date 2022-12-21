import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0rem 2rem;
  gap: 0.5rem;

  > h1 {
    font-family: Roboto;
    font-style: 700;
    font-size: 3.75rem;
    line-height: 70px;

    width: 22rem;
  }

  > p {
    font-family: Roboto;
    font-style: 700;
    font-size: 16px;
    line-height: 19px;

    width: 24rem;

    color: ${(props) => props.theme.colors["text-description"]};
  }

  > h2 {
    font-family: Roboto;
    font-style: 700;
    font-size: 40px;
    line-height: 47px;
  }

  > button {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    height: 5.625rem;
    width: 17rem;

    border: none;
    background: ${(props) => props.theme.colors.button};
    color: white;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    h1,
    p {
      width: 100%;
    }
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  height: 96vh;
  width: 56.25rem;

  margin-top: -16.5rem;
  padding-top: 14rem;

  > img {
    height: 60%;
    
    @media screen and (max-width: 1024px) {
        width: 60%;
        min-width: 17rem;
    }
  }

  background: ${(props) => props.theme.colors["main-background"]};

  > div {
    display: flex;
    gap: 2.3rem;

    > img {
   
      cursor: pointer;
      box-sizing: border-box;

      &:hover {
        outline: 4px solid red;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-top: 0;

    > div {
      gap: 0.5rem;
      align-items: center;
      justify-content: center;

      width: 100%;
      flex-wrap: wrap;
      margin-bottom: 10rem;


      >img {
        max-width: 14rem;
        max-height: 14rem;
      }
    
    }
  }
`;
