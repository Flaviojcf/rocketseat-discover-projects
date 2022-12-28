import styled from "styled-components";

interface ContainerProps {
  plan: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  width: 22rem;
  height: ${(props) => (props.plan === "Básico" ? `31rem` : `29rem`)};

  margin-top: ${(props) => (props.plan === "Básico" ? `-0.75rem` : `0`)};

  border-radius: 6px;
  border: 1px solid white;

  background: white;
  box-shadow: 0px 1px 2px 0px #8e96b940;

  cursor: pointer;
  transition: all ease 0.2s;

  &:hover {
    box-shadow: 10px 38px 62px 1px rgba(0, 0, 0, 0.75);
  }

  @media screen and (max-width: 1024px) {
    height: 29rem !important;
    margin-top: 0rem;
  }

  @media screen and (max-width: 375px) {
    width: 18rem;
  }
`;

export const PlanContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface TypeOfPlanContainerProps {
  colorForPlan: string;
  backgroundForPlan: string;
  plan: string;
}

export const TypeOfPlanContainer = styled.div<TypeOfPlanContainerProps>`
  display: flex;

  align-items: center;
  justify-content: space-between;

  background: ${(props) => props.backgroundForPlan};

  width: 100%;
  height: 4.75rem;

  padding: 1.875rem;

  > h1 {
    font-family: Open Sans;
    font-style: 600;
    font-size: 1.125rem;
    line-height: 25px;
    color: ${(props) => props.colorForPlan};
  }

  > button {
    display: ${(props) => (props.plan === "Básico" ? "flex" : "none")};

    align-items: center;
    justify-content: center;

    background: #1d539e;
    border-radius: 40px;
    border: none;

    width: 5.875rem;
    height: 2rem;

    font-family: Open Sans;
    font-style: 600;
    font-size: 0.75rem;
    line-height: 16px;
    color: white;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 0rem 1.875rem;

  gap: 0.625rem;

  > h1 {
    > strong {
      font-family: Open Sans;
      font-style: 700;
      font-size: 2.25rem;
      line-height: 49px;
      color: #1e2338;
      > strong {
        font-size: 1.125rem;
        line-height: 25px;
      }
    }
    font-family: Open Sans;
    font-style: 400;
    font-size: 1.125rem;
    line-height: 25px;
    color: #828799;
  }

  > p {
    font-family: Open Sans;
    font-style: 400;
    font-size: 0.875rem;
    line-height: 19px;
    color: #828799;

    padding-bottom: 1.25rem;
    border-bottom: 1px solid #eeeeee;
  }
`;

export const PermissionsContainer = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 1.25rem;
  padding: 0.875rem 1.875rem;

  > li {
    display: flex;
    gap: 1rem;

    font-family: Open Sans;
    font-style: 400;
    font-size: 0.875rem;
    line-height: 19px;
    color: #828799;
  }
`;

interface ButtonContainerProps {
  plan: string;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-self: center;
  justify-self: center;

  justify-content: center;
  align-items: center;

  width: 90%;
  height: 3.0625rem;

  border: 1px solid #1d539e;
  border-radius: ${(props) => (props.plan === "Básico" ? `10px` : `6px`)};

  color: ${(props) => (props.plan === "Básico" ? "white" : "#1D539E")};

  margin-top: auto;
  margin-bottom: 1.75rem;
  background: ${(props) => (props.plan === "Básico" ? "#1D539E" : "white")};

  font-family: Open Sans;
  font-style: 600;
  font-size: ${(props) => (props.plan === "Básico" ? `1.25rem` : `0.875rem`)};
  line-height: ${(props) => (props.plan === "Básico" ? `25px` : `27px`)};

  &:hover {
    opacity: 0.8;
  }
`;
