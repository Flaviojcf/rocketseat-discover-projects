import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.background};
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 50%;

  background: ${(props) => props.theme.colors.background};

  @media screen and (max-width: 1024px) {
    width: 100%;
    align-items: center;
  }
`;

export const LogoImageContainer = styled.div`
  display: flex;

  margin-right: auto;
  top: 0;
  position: fixed;
  margin-top: 2rem;
  left: 4rem;

  width: 7rem;
  height: 1.5rem;

  > img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 1024px) {
    right: 50%;
    left: 25%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  padding: 3.45rem 7.45rem;

  max-width: 35.75rem;

  height: 35.75rem;

  background: ${(props) => props.theme.colors["form-background"]};
  border-radius: 4px;

  @media screen and (max-width: 1024px) {
    background: ${(props) => props.theme.colors.background};
    padding: 0;
    max-width: 18rem;
    margin-top: -8rem;
   
  }
`;

export const ImageContainer = styled.div`
  display: flex;

  width: 50%;

  > img {
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const TitleFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: 0.31rem;

  > h1 {
    display: flex;
    align-items: center;
    gap: 0.625rem;

    font-family: Poppins;
    font-style: 600;
    font-size: 1.5rem;
    line-height: 36px;
    color: ${(props) => props.theme.colors["text-title"]};
  }

  > h2 {
    font-family: Poppins;
    font-style: 500;
    font-size: 1rem;
    line-height: 24px;
    color: ${(props) => props.theme.colors["text-base"]};
  }
`;

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  margin-top: 1.6rem;
  width: 100%;
 

  font-family: Poppins;
  font-style: 500;
  font-size: 1rem;
  line-height: 24px;
  color: ${(props) => props.theme.colors["text-base"]};

  > input {
    display: flex;
    width: 100%;
    height: 2.75rem;

    align-items: center;

    background-image: url("mail.png");
    background-repeat: no-repeat;
    background-position: 3% 50%;
    padding-left: 2.2rem;

    border-radius: 4px;
    border: 2px solid #868686;
    background-color: transparent;
    color: ${(props) => props.theme.colors["text-base"]};

    &::placeholder {
      font-family: Poppins;
      font-style: 500;
      font-size: 0.875rem;
      line-height: 16px;
      color: ${(props) => props.theme.colors["text-base"]};
    }

    &:focus {
      border: 2px solid ${(props) => props.theme.colors["primary-color"]};
      outline-offset: 0px !important;
      outline: none !important;
    }
  }
`;

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  margin-top: 1.6rem;
  width: 100%;

  font-family: Poppins;
  font-style: 500;
  font-size: 1rem;
  line-height: 24px;
  color: ${(props) => props.theme.colors["text-base"]};

  > input {
    display: flex;
    width: 100%;
    height: 2.75rem;

    align-items: center;

    background: url("eye.png"), url("lock.png");
    background-repeat: no-repeat, no-repeat;
    background-position: 97% 50%, 3% 50%;

    padding-left: 2.2rem;

    border-radius: 4px;
    border: 2px solid #868686;
    background-color: transparent;
    color: ${(props) => props.theme.colors["text-base"]};

    &::placeholder {
      font-family: Poppins;
      font-style: 500;
      font-size: 0.875rem;
      line-height: 16px;
      color: ${(props) => props.theme.colors["text-base"]};
    }

    &:focus {
      border: 2px solid ${(props) => props.theme.colors["primary-color"]};
      outline-offset: 0px !important;
      outline: none !important;
    }
  }
`;

export const ForgetPasswordContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  margin-top: 1.18rem;

  > div {
    display: flex;
    align-items: center;

    gap: 0.31rem;
    height: 1.3rem;

    font-family: Poppins;
    font-style: 500;
    font-size: 1rem;
    line-height: 19px;
    color: ${(props) => props.theme.colors["text-base"]};

    > input,
    label {
      cursor: pointer;
    }

    > input {
      accent-color: ${(props) => props.theme.colors["primary-color"]};
    }
  }

  > p {
    height: 1.3rem;

    font-family: Poppins;
    font-style: 600;
    font-size: 0.875rem;
    line-height: 21px;
    color: ${(props) => props.theme.colors["primary-color"]};

    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 1.25rem;

  width: 100%;
  height: 3.18rem;

  border-radius: 4px;
  background: ${(props) => props.theme.colors["primary-color"]};

  font-family: Poppins;
  font-style: 600;
  font-size: 1.125rem;
  line-height: 21px;
  color: #473404;

  transition: all ease 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const RegisterContainer = styled.div`
  display: flex;
  margin-top: 0.875rem;

  justify-content: center;

  text-align: center;
  color: ${(props) => props.theme.colors["primary-color"]};

  > p {
    font-style: 400;
    > strong {
      font-style: 600;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`;
