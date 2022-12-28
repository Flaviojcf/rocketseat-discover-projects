import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50%;

  background: ${(props) => props.theme.colors["page-background"]};

  gap: 1.25rem;
`;

export const Content = styled.div`
  display: flex;
  gap: 1.25rem;

  margin-top: -8%;

  @media screen and (min-width: 1440px) {
    margin-top: -10%;
  }

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;

    padding: 1rem;

    justify-content: center;

    margin-top: auto;
    align-self: center;
  }
`;
