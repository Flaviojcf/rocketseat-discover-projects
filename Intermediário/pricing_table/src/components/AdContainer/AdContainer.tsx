import { AdModel } from "../AdModel/AdModel";
import { Container, Content } from "./styles";

export function AdContainer() {
  return (
    <Container>
      <Content>
        <AdModel backgroundForPlan="#white" colorForPlan="#black" plan="Free" price={0} counter={2}/>
        <AdModel backgroundForPlan="#FFCC29" colorForPlan="#1D539E" plan="Básico" price={29}  counter={3}/>
        <AdModel backgroundForPlan="#white" colorForPlan="#black" plan="Profissional"price={59}  counter={4}/>
      </Content>
    </Container>
  );
}
