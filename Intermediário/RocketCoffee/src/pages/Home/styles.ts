import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: black;

  padding: 1rem;

  height: 100vh;
`;

export const RightToptBlurContainer = styled.div`
  display: flex;

  width: 20rem;
  height: 20.0625rem;

  background: ${(props) => props.theme.colors.button};
  filter: blur(200px);

  margin-left: auto;
  right: 0;
  position: absolute;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const LeftBottomBlurContainer = styled.div`
  display: flex;

  width: 20rem;
  height: 20.0625rem;

  background: ${(props) => props.theme.colors.button};
  filter: blur(200px);

  left: 0;
  bottom: 0;

  position: absolute;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const BottomBlurMobileContainer = styled.div`
  display: none;

  width: 100%;
  height: 20.0625rem;

  background: ${(props) => props.theme.colors.button};
  filter: blur(350px);

  margin-top: auto;
  bottom: 0;

  position: fixed;

  @media screen and (max-width: 1024px) {
    display: flex;
  }

  @media screen and (max-width: 425px) {
    filter: blur(250px);
  }
`;
