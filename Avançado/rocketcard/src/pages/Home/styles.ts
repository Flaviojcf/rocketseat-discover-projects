import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  background: ${(props) => props.theme.colors["bg-card"]};

  gap: 10rem;


  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 2rem;
    height: 100%;


  }
`;

export const GenerateBackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;


  gap: 2rem;

  > p {
    font-family: Prompt;
    font-style: 400;
    font-size: 1.25rem;
    line-height: 30px;

    color: ${(props) => props.theme.colors.text};
  }

  > input {
    padding: 1rem;
    border-radius: 6px;
  }

  > div {

    display: flex;
    gap: 0.5rem;

  > button {
    background: ${(props) => props.theme.colors.bg};

    height: 5rem;
    width: 10rem;

    border-radius: 15px;

    color: ${(props) => props.theme.colors.text};
    font-family: Prompt;
    font-style: 400;
    font-size: 0.9375rem;
    line-height: 23px;

    &:hover {
      box-shadow: 1px 23px 31px 1px rgba(0, 0, 0, 0.75);
    }

    @media screen and (max-width: 375px) { 
      width: 8rem;
    }
  }
}
`;
