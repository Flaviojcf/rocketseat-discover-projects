import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: auto;


 

  bottom: 0;
  left: 0;
  right: 0;

  > img {
    margin-top: auto;
    height: 11.2rem;
  
    cursor: pointer;

    bottom: 0;
    left: 0;
    right: 0;

    @media screen and (max-width: 1024px) {
    display: none;
  }
  }

  > ul {
    display: flex;
    width: 60%;
    justify-content: space-between;

    padding: 0 1rem;

    > li {
      font-family: Roboto;
      font-style: 400;
      font-size: 16px;
      line-height: 16px;

      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    
  @media screen and (max-width: 1024px) {
    display: none;
  }
  }
`;

export const MoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;


  height: 11.2rem;
  width: 20%;
  gap: 0.25rem;
  padding: 0rem 1rem;

  background: ${(props) => props.theme.colors.footer};
 
  > p {
    font-family: Roboto;
    font-style: 700;
    font-size: 1.5rem;
    line-height: 28px;
    color: white;
  }


  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
