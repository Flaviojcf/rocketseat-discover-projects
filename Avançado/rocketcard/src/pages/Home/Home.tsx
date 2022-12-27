import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { api } from "../../services/api";
import { Container, GenerateBackgroundContainer } from "./styles";

type GetUserInformations = {
  data: {
    login: string;
    followers: number;
    following: number;
    public_repos: number;
    company?: string;
    location?: string;
    avatar_url: string;
  };
};

type User = {
  login: string;
  followers: number;
  following: number;
  public_repos: number;
  company?: string;
  location?: string;
  avatar_url: string;
};

export function Home() {
  const [userInfo, setUserInfo] = useState<User>();
  const [username, setUsername] = useState("");
  const [randomColor, setRandomColor] = useState("");

  async function getUserInformations() {
    if (!username) return;
    try {
      const response = (await api.get(`/${username}`)) as GetUserInformations;
      setUserInfo({
        followers: response.data.followers,
        following: response.data.following,
        login: response.data.login,
        public_repos: response.data.public_repos,
        company: response.data.company,
        location: response.data.location,
        avatar_url: response.data.avatar_url,
      });
    } catch (err) {
      alert("User doesn't exists");
    }
  }

  function generateBackground() {
    const randomColorGenerated = Math.floor(Math.random() * 16777215).toString(
      16
    );
    setRandomColor("#" + randomColorGenerated);
  }
  console.log(randomColor);

  return (
    <Container>
      <Card
        followers={Number(userInfo?.followers)}
        following={Number(userInfo?.following)}
        repos={Number(userInfo?.public_repos)}
        username={String(userInfo?.login)}
        company={userInfo?.company}
        local={userInfo?.location}
        avatar_url={String(userInfo?.avatar_url)}
        randomColor={randomColor}
      />
      <GenerateBackgroundContainer>
        <p>Customizar Rocketcard</p>
        <input
          type="text"
          required
          placeholder="Digite seu username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <div>
        <button type="submit" onClick={() => getUserInformations()}>
          Buscar usuário
        </button>
        <button onClick={() => generateBackground()}>Gerar background</button>
        </div>
      </GenerateBackgroundContainer>
    </Container>
  );
}
