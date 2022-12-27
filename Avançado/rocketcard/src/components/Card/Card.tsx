import {
  Container,
  Content,
  FooterLogoContainer,
  ImageProfileContainer,
  LogoContainer,
  UserInfoContainer,
} from "./styles";

interface CardProps {
  username: string;
  followers: number;
  following: number;
  repos: number;
  company?: string;
  local?: string;
  avatar_url: string;
  randomColor:string;
}

export function Card({
  followers,
  following,
  repos,
  username,
  company,
  local,
  avatar_url,
  randomColor
}: CardProps) {
  return (
    <Container>
      <Content randomColor={randomColor}>
        <LogoContainer>
          <div>
            <img src="logo.png" />
          </div>
          <p>{username}</p>
        </LogoContainer>
        <ImageProfileContainer>
          <img src={avatar_url} />
        </ImageProfileContainer>
        <UserInfoContainer>
          <ul>
            <li>
              <img src="followers.png" />
              <p>{followers} Seguidores</p>
            </li>
            <li>
              <img src="followers.png" />
              <p>{following} Seguindo</p>
            </li>
            <li>
              <img src="repository.png" />
              <p>{repos} Repositórios</p>
            </li>
            <li>
              <img src="company.png" />
              <p>{company}</p>
            </li>
            <li>
              <img src="location.png" />
              <p>{local}</p>
            </li>
          </ul>
        </UserInfoContainer>
        <FooterLogoContainer>
          <img src="logo.png" />
          <p>ROCKETCARD</p>
        </FooterLogoContainer>
      </Content>
     
    </Container>
  );
}
