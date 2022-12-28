import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 6.25rem;
 
  text-align: center;

  height: 50%;
  gap: 1.25rem;

  background: ${(props) => props.theme.colors.blue};

  > h1 {
    font-family: Open Sans;
    font-style: 700;
    font-size: 3rem;
    line-height: 65px;
    color: white;
  }

  > p {
    display: flex;
    align-self: center;

    max-width: 34rem;

    font-family: Open Sans;
    font-style: 400;
    font-size: 1.125rem;
    line-height: 25px;
    color: white;
  }

  @media screen and (max-width: 768px) {
    padding: 0rem 1rem;
    justify-content: center;
  }
`;
