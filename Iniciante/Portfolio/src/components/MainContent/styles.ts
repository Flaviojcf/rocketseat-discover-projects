import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 59.5rem;

  gap: 1.875rem;

  @media screen and (max-width: 1024px) {
    padding: 1.875rem;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  padding: 1.875rem;

  align-items: center;
  justify-content: space-between;

  width: 100%;

  background: ${(props) => props.theme.colors["purple-500"]};
  border-radius: 20px;
  border: 1px solid black;

  > h1,
  p {
    cursor: pointer;
  }
  > a {
    > p {
      font-family: Merriweather Sans;
      font-weight: 400;
      color: ${(props) => props.theme.colors["purple-300"]};

      font-size: 14px;
      line-height: 18px;
    }
  }

  > h1 {
    font-family: Merriweather Sans;
    font-weight: 700;
    color: ${(props) => props.theme.colors["purple-300"]};

    font-size: 20px;
    line-height: 25px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const MyProjectsContainer = styled.div`
  display: flex;
  gap: 1.875rem;

  width: 100%;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const FirstProjectContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  height: 16.625rem;

  padding: 1.75rem;

  background: ${(props) => props.theme.colors["purple-500"]};
  border-radius: 20px;

  > a {
    > h1 {
      display: flex;
      align-items: center;

      gap: 1rem;

      font-family: Merriweather Sans;
      font-weight: 700;
      color: ${(props) => props.theme.colors["purple-300"]};

      font-size: 20px;
      line-height: 25px;
    }
  }

  @media screen and (max-width: 375px) {
    > a {
      h1 {
        img {
          display: none;
        }
      }
    }
  }

  > p {
    font-family: Merriweather Sans;
    font-weight: 400;

    margin-top: 0.5rem;
    color: ${(props) => props.theme.colors["purple-300"]};

    font-size: 14px;
    line-height: 20px;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const LanguageProjectContainer = styled.div`
  display: flex;

  width: 100%;

  align-items: center;
  justify-content: space-between;
  margin-top: auto;

  > div {
    display: flex;
    margin-top: auto;
    align-items: center;
    gap: 1rem;
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

export const SecondProjectContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  height: 16.625rem;

  padding: 1.75rem;

  background: ${(props) => props.theme.colors["purple-500"]};
  border-radius: 20px;

  > a {
    > h1 {
      display: flex;
      align-items: center;

      gap: 1rem;

      font-family: Merriweather Sans;
      font-weight: 700;
      color: ${(props) => props.theme.colors["purple-300"]};

      font-size: 20px;
      line-height: 25px;
    }
  }

  > p {
    font-family: Merriweather Sans;
    font-weight: 400;

    margin-top: 0.5rem;
    color: ${(props) => props.theme.colors["purple-300"]};

    font-size: 14px;
    line-height: 20px;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 375px) {
    > a {
      h1 {
        img {
          display: none;
        }
      }
    }
  }
`;

export const RecentPostContainer = styled.div`
  display: flex;
  align-items: center;

  padding-left: 1.75rem;

  width: 100%;
  height: 5.375rem;

  background: ${(props) => props.theme.colors["purple-500"]};
  border-radius: 20px;
  border: 1px solid black;

  > h1 {
    display: flex;
    align-items: center;

    gap: 1rem;

    font-family: Merriweather Sans;
    font-weight: 700;
    color: ${(props) => props.theme.colors["purple-300"]};

    font-size: 20px;
    line-height: 25px;
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;

  padding: 1.75rem;

  width: 100%;
  height: 12.563rem;

  background: ${(props) => props.theme.colors["purple-500"]};
  border-radius: 20px;
  border: 1px solid black;

  > h2 {
    font-family: Merriweather Sans;
    font-weight: 300;
    max-width: 8rem;
    color: ${(props) => props.theme.colors["purple-300"]};

    font-size: 13px;
    line-height: 16px;

    margin-top: 0.625rem;
  }

  @media screen and (max-width: 425px) {
    flex-direction: column;
    height: 16.563rem;
  }
`;
