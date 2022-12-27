import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  padding: 1.75rem 1rem;

  width: 27rem;
  height: 43rem;

  border-radius: 50px;

  background: black;

  @media screen and (max-width: 1024px) {
    width: 20rem;
  }

  @media screen and (max-width: 375px) {
    width: 18rem;
  }
`;

interface ContentProps {
  randomColor: string;
}

export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;

  border-radius: 50px;

  width: 100%;
  height: 100%;
  background: ${(props) =>
    props.randomColor === ""
      ? props.theme.colors["bg-card"]
      : props.randomColor};

  overflow: hidden;

  @media screen and (max-width: 1024px) {
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 2.35rem 2rem;

  gap: 1.25rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid ${(props) => props.theme.colors.text};

    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }

  > p {
    font-family: Prompt;
    font-style: 400;
    font-size: 1.5rem;
    line-height: 36px;

    color: ${(props) => props.theme.colors.text};
  }
`;

export const ImageProfileContainer = styled.div`
  display: flex;

  position: relative;

  margin-left: auto;
  margin-right: -4.5rem;

  width: 23rem;
  height: 23rem;

  border-radius: 50%;
  border: 10px solid ${(props) => props.theme.colors["img-profile"]};

  > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  z-index: 9999;

  margin-top: -10rem;
  margin-left: 1.31rem;

  align-items: center;
  justify-content: center;

  padding: 1.75rem 1.25rem;

  width: 12.25rem;
  height: 12.25rem;
  border-radius: 50px;

  background: linear-gradient(#000000, #464545, #3e3838);
  opacity: 0.9;
  filter: drop-shadow(0, 0, 0, 0.25);
  border: 1px solid black;

  > ul {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 0.75rem;

    > li {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      min-width: 10rem;

      gap: 0.5rem;

      font-family: Prompt;
      font-style: 400;
      font-size: 1rem;
      line-height: 24px;

      overflow: hidden;

      max-height: 2.25rem;

      color: ${(props) => props.theme.colors.text};
    }
  }
`;

export const FooterLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2rem;
  margin-left: auto;
  margin-right: 0.75rem;

  > p {
    font-family: Prompt;
    font-style: 400;
    font-size: 1.25rem;
    line-height: 30px;

    color: ${(props) => props.theme.colors.text};
  }
`;
