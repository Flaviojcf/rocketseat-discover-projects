import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 4rem 8rem;

  background: #FBF6FF;

  @media screen and (max-width: 1410px) {
   align-items: center;
   justify-content: center;
   text-align: center;
  }
`;

export const MainPostContainer = styled.div`
  display: flex;
  justify-content: space-between;


  @media screen and (max-width: 1410px) {
    align-self: center;
  }
`;

export const AsidePostContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media screen and (max-width: 1410px) {
    display: none;
  }
`;

export const PostsContainer = styled.div`
  
  display: flex;

  gap: 2rem;

  @media screen and (max-width: 1410px) {
    flex-direction: column;
  }

`;