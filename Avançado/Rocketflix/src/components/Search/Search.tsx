import { useState } from "react";
import { IMG_URL } from "../../../db";
import { api } from "../../services/api";
import {
  ButtonSearchAndInfoContainer,
  Container,
  MovieContainer,
  TitleContainer,
} from "./styles";

interface MovieProps {
  title: string;
  description: string;
  image: string;
}

export function Search() {
  const [movie, setMovie] = useState<MovieProps[]>([]);

  async function getMovie() {
    const randomPage = Math.floor(Math.random() * (400 - 2 + 2));
    const response = await api.get(
      `/popular?api_key=95f08ba8dc0a3c7b0852acf508a23c57&page=${randomPage}`
    );

    const newMovie = {
      title: response.data.results[0].title,
      description: response.data.results[0].overview,
      image: response.data.results[0].poster_path,
    };

    setMovie([newMovie]);
  }

  return (
    <Container>
      <TitleContainer>
        <img src="/logo.png" />
        <h1>Não sabe o que assistir?</h1>
      </TitleContainer>
      {movie[0] && (
        <MovieContainer>
          <img src={`${IMG_URL}/${movie[0]?.image}`} alt="" />
          <div>
            <h1>{movie[0]?.title}</h1>
            <p>{movie[0]?.description}</p>
          </div>
        </MovieContainer>
      )}
      <ButtonSearchAndInfoContainer>
        <button onClick={() => getMovie()}>
          <img src="/logo.png" />
          <strong>Encontrar filme</strong>
        </button>
        <p>
          Clique em "Encontrar filme" que traremos informações de algum filme
          para você assistir hoje.
        </p>
      </ButtonSearchAndInfoContainer>
    </Container>
  );
}
