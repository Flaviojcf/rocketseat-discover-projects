import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

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

    width: 26rem;
  }
  > h2 {
    font-family: Roboto;
    font-style: 400;
    font-size: 1rem;
    line-height: 24px;
    color: black;

    width: 34rem;
  }

  &+& {
    border-top: 1px solid #F2E7FA;
    padding-top: 1rem;
  }
`;
