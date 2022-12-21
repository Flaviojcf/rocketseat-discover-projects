import styled from "styled-components";

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 20.75rem;

  gap: 1.875rem;

`;

export const ImageProfileContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  height: 18.25rem;
  width: 100%;

  padding-top: 2rem;

  background: ${(props) => props.theme.colors["purple-500"]};

  border-radius: 20px;
  border: 1px solid black;

  > h1 {
    font-family: Merriweather Sans;
    font-weight: 700;
    color: ${(props) => props.theme.colors["purple-300"]};

    font-size: 23px;
    line-height: 29px;

    margin-top: 1.875rem;
  }

  > h2 {
    font-family: Merriweather Sans;
    font-weight: 300;
    color: ${(props) => props.theme.colors["purple-300"]};

    font-size: 13px;
    line-height: 16px;

    margin-top: 0.625rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.875rem 2.5rem;

  height: 21.75rem;
  width: 100%;

  background: ${(props) => props.theme.colors["purple-500"]};

  border-radius: 20px;
  border: 1px solid black;

  > ul {
    display: flex;

    flex-direction: column;

    gap: 1.75rem;

    > li {
      display: flex;
      align-items: center;

      gap: 1.25rem;

      font-family: Merriweather Sans;
      font-weight: 400;
      color: ${(props) => props.theme.colors["purple-300"]};
      font-size: 12px;
      line-height: 15px;

      > img,
      p {
        cursor: pointer;
      }
    }
  }
  
  @media screen and (max-width: 425px) {
      padding: 1.875rem 0.5rem;
  }
`;

export const TecsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 13rem;

  padding: 1.875rem 2.5rem;
  background: ${(props) => props.theme.colors["purple-500"]};

  border-radius: 20px;
  border: 1px solid black;

  > h1 {
    font-family: Merriweather Sans;
    font-weight: 700;
    color: ${(props) => props.theme.colors["purple-300"]};

    font-size: 20px;
    line-height: 25px;
  }

  @media screen and (max-width: 425px) {
      padding: 1.875rem 0.5rem;
  }
`;

export const TecsContent = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1.25rem;

  gap: 0.938rem;

  > div {
    display: flex;
 
    min-width: 14rem;
    gap: 0.938rem;

    > p {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 5.375rem;
      height: 1.5rem;

      background: ${(props) => props.theme.colors.pink};
      border-radius: 30px;

      font-family: Merriweather Sans;
      font-weight: 700;
      color: ${(props) => props.theme.colors.black};

      font-size: 10px;
      line-height: 13px;

      
    }
  }
`;

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.875rem 2.5rem;

  width: 100%;
  height: 21.75rem;

  background: ${(props) => props.theme.colors["purple-500"]};

  border-radius: 20px;
  border: 1px solid black;

  > h1 {
    font-family: Merriweather Sans;
    font-weight: 700;
    color: ${(props) => props.theme.colors["purple-300"]};

    font-size: 20px;
    line-height: 25px;
  }

  > ul {
    display: flex;
    margin-top: 1.875rem;

    flex-direction: column;

    gap: 1.75rem;

    > li {
      display: flex;
      flex-direction: column;
      font-family: Merriweather Sans;
      font-weight: 400;
      color: ${(props) => props.theme.colors["purple-300"]};
      font-size: 12px;
      line-height: 15px;
    }
  }
`;

export const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.875rem 2.5rem;

  width: 100%;
  height: 21.75rem;

  background: ${(props) => props.theme.colors["purple-500"]};

  border-radius: 20px;
  border: 1px solid black;

  > h1 {
    font-family: Merriweather Sans;
    font-weight: 700;
    color: ${(props) => props.theme.colors["purple-300"]};

    font-size: 20px;
    line-height: 25px;
  }

  > ul {
    display: flex;
    margin-top: 1.875rem;

    flex-direction: column;

    gap: 1.75rem;

    > li {
      display: flex;
      flex-direction: column;
      font-family: Merriweather Sans;
      font-weight: 400;
      color: ${(props) => props.theme.colors["purple-300"]};
      font-size: 12px;
      line-height: 15px;
    }
  }
`;
