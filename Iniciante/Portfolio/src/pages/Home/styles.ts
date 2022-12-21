import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  background: ${(props) => props.theme.colors["purple-700"]};

  padding: 2.5rem;
  gap: 3.75rem;

  @media screen and (min-width: 1441px) {
    justify-content: center;

    gap: 20rem;
  }


  
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
