import { ImageContainer } from "../ImageContainer/ImageContainer";
import {
  EducationContainer,
  ExperienceContainer,
  ImageProfileContainer,
  InfoContainer,
  SideContainer,
  TecsContainer,
  TecsContent,
} from "./styles";

export function SideContent() {
  return (
    <SideContainer>
      <ImageProfileContainer>
        <ImageContainer hasBorder={true}/>
        <h1>Flávio José da Costa </h1>
        <h2>Full Stack Developer</h2>
      </ImageProfileContainer>
      <InfoContainer>
        <ul>
          <li>
            <img src="map-pin.png" /> <p>Brasil</p>
          </li>
          <li>
            <img src="briefcase.png" /> <p>Student</p>
          </li>
          <li>
            <img src="github.png" /> <p>Flaviojcf</p>
          </li>
          <li>
            <img src="linkedin.png" /> <p>flávio-jcosta/</p>
          </li>
          <li>
            <img src="globe.png" /> <p>https://vercel.com/flaviojcf</p>
          </li>
          <li>
            <img src="mail.png" /> <p>flaviojcostafilho@gmail.com</p>
          </li>
        </ul>
      </InfoContainer>
      <TecsContainer>
        <h1>Tecnologias</h1>
        <TecsContent>
          <div>
            <p>JAVASCRIPT</p>
            <p>TYPESCRIPT</p>
            <p>REACTJS</p>
          </div>

          <div>
            <p>NODEJS</p>
            <p>GIT</p>
            <p>GITHUB</p>
          </div>

          <div>
            <p>HTML</p>
            <p>CSS</p>
            <p>NEXTJS</p>
          </div>
        </TecsContent>
      </TecsContainer>
      <ExperienceContainer>
        <h1>Experiências</h1>
        <ul>
          <li>
            Estagiário de engenharia
            <p>jan de 2021 - mar de 2022</p>
            <p>GIGAVIDA</p>
          </li>
          <li>
            Membro fundador
            <p>nov de 2019 - mai de 2021</p>
            <p>GIGAVIDA</p>
          </li>
          <li>
            Dio Campus Expert
            <p>abr de 2022 - jun de 2022</p>
            <p>DIGITAL INNOVATION ONE</p>
          </li>
        </ul>
      </ExperienceContainer>
      <EducationContainer>
        <h1>Educação</h1>

        <ul>
          <li>
           Engenharia Elétrica Eletrônica
            <p>2018 - 2024</p>
            <p>Universidade de Pernambuco</p>
          </li>
          <li>
            Análise e Desenvolvimento de Sistemas
            <p> 2022 - 2024</p>
            <p>Descomplica</p>
          </li>
          <li>
            Full Stack Developer
            <p>2021</p>
            <p>Rocketseat</p>
          </li>
        </ul>
      </EducationContainer>
    </SideContainer>
  );
}
