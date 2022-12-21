import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  align-items: center;
  justify-content: center;

  padding: 4rem 1rem;

  gap: 2rem;

  > img {
    width: 5.45rem;
    height: 3.85rem;
  }

  > h1 {
    font-family: Poppins;
    font-style: 700;
    font-size: 2.5rem;
    line-height: 60px;

    color: ${(props) => props.theme.colors.title};
  }
`;

export const ButtonSearchAndInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 1rem;

  > button {
    display: flex;
    align-items: center;
    margin: 1.875rem 0rem 1.625rem 0rem;

    padding: 0.7rem 3rem;
    gap: 1.1rem;

    cursor: pointer;

    transition: all ease 0.2s;

    font-family: Poppins;
    font-style: 700;
    font-size: 1rem;
    line-height: 18px;

    color: black;

    &:hover {
      opacity: 0.8;
    }
    > img {
      width: 2rem;
      height: 1.5rem;
    }
  }
  > p {
    font-family: Poppins;
    font-style: 400;
    font-size: 0.875rem;
    line-height: 21px;

    color: ${(props) => props.theme.colors.title};

    max-width: 25rem;
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.85rem;

  padding: 1rem;

  > img {
    width: 10rem;
    height: 15rem;
  }

  > div {
    display: flex;
    flex-direction: column;

    gap: 1.25rem;

    > h1 {
      font-family: Poppins;
      font-style: 700;
      font-size: 1.5rem;
      line-height: 30px;

      color: ${(props) => props.theme.colors.title};
    }

    > p {
      font-family: Poppins;
      font-style: 400;
      font-size: 1rem;
      line-height: 24px;

      max-width: 25rem;

      color: ${(props) => props.theme.colors.title};

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 12; /* number of lines to show */
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  @media screen and (max-width: 425px) {
    flex-direction: column;

    align-items: center;
    text-align: center;

    > div > p {
      -webkit-line-clamp: 4; /* number of lines to show */
    }
  }
`;
