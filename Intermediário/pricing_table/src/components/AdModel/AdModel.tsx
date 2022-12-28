import {
  ButtonContainer,
  Container,
  PermissionsContainer,
  PlanContainer,
  PriceContainer,
  TypeOfPlanContainer,
} from "./styles";

interface AdModelProps {
  plan: string;
  colorForPlan: string;
  backgroundForPlan: string;
  price: number;
  counter: number;
}

export function AdModel({
  plan,
  backgroundForPlan,
  colorForPlan,
  price,
  counter,
}: AdModelProps) {
  const rows = [];
  for (let i = 0; i < counter; i++) {
    rows.push(i);
  }

  return (
    <Container plan={plan}>
      <PlanContainer>
        <TypeOfPlanContainer
          backgroundForPlan={backgroundForPlan}
          colorForPlan={colorForPlan}
          plan={plan}
        >
          <h1>{plan}</h1>
          <button>Popular</button>
        </TypeOfPlanContainer>
        <PriceContainer>
          <h1>
            <strong>
              R$ {price}
              <strong>,00</strong>
            </strong>
            /mês
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </PriceContainer>
      </PlanContainer>
      <PermissionsContainer>
        {rows.map((row) => (
          <li>
            <img src="check.svg" />
            Lorem ipsum dolor sit amet
          </li>
        ))}
      </PermissionsContainer>
      <ButtonContainer plan={plan}>
        <strong>ASSINAR</strong>
      </ButtonContainer>
    </Container>
  );
}
