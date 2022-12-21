import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 50%;

  > img {
    width: 100%;
  }


  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 50vh;
  }
  
`;
