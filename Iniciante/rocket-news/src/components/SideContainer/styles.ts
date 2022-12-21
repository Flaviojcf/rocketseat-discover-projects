import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.875rem;

  background: ${(props) => props.theme.colors["body-bg-color"]};

  width: 50%;
  height: 100vh;

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 75vh;
  }
`;

export const LogoContainer = styled.div`
  display: flex;

  > img {
    min-width: 16rem;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 5.75rem;

  gap: 0.5625rem;

  > h2 {
    font-family: Work Sans;
    font-style: 700;
    font-size: 24px;
    line-height: 28px;

    color: ${(props) => props.theme.colors["title-color"]};
  }

  > h3 {
    font-family: Work Sans;
    font-style: 700;
    font-size: 14px;
    line-height: 16px;

    color: ${(props) => props.theme.colors["text-color"]};
  }

  > p {
    font-family: Work Sans;
    font-style: 400;
    font-size: 14px;
    line-height: 19px;

    max-width: 38rem;

    color: gray;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 4rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 3.125rem;

  > h3 {
    font-family: Work Sans;
    font-style: 400;
    font-size: 14px;
    line-height: 19px;

    color: ${(props) => props.theme.colors["form-color"]};

    margin-bottom: 1.0625rem;
  }

  > div {
    display: flex;

    position: absolute;
    width: 54%;

    align-items: flex-end;

    @media screen and (max-width: 1024px) {
      width: 80%;
    }

    > input {
      height: 3rem;
      width: 100%;

      margin-top: 3rem;
      padding-left: 0.625rem;

      border: none;

      border-left: 4px solid ${(props) => props.theme.colors["title-color"]};

      font-family: Work Sans;
      font-style: 400;
      font-size: 12px;
      line-height: 14px;

      color: ${(props) => props.theme.colors["form-color"]};
    }

    > div {
      display: flex;

      cursor: pointer;

      width: 3rem;
      height: 3rem;
      background: ${(props) => props.theme.colors["bg-button-color"]};

      align-items: center;
      justify-content: center;
      > img {
      }
    }
  }
`;

export const LetMeReadContainer = styled.div`
  display: flex;
  align-items: center;

  margin-top: 8rem;
  gap: 0.5rem;

  > h5 {
    font-family: Work Sans;
    margin: auto 0;

    font-style: 400;
    font-size: 18px;
    line-height: 19px;
    color: ${(props) => props.theme.colors["bg-button-color"]};
  }

  &:hover {
    cursor: pointer;
    > h5 {
      text-decoration: underline;
    }
  }
`;
