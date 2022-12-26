import { MainPost } from "../MainPost/MainPost";
import { PostWithouImage } from "../PostWithouImage/PostWithouImage";
import {
  AsidePostContainer,
  Container,
  MainPostContainer,
  PostsContainer,
} from "./styles";

export function Main() {
  return (
    <Container>
      <MainPostContainer>
        <MainPost
          mainPost
          data="Janeiro 04, 2022"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean."
          image="post-1.png"
          title="Começando no ReactJS em 2022"
        />
        <AsidePostContainer>
          <PostWithouImage
            title={
              "Conheça as principais técnicas para conseguir uma vaga internacional em programação"
            }
          />
          <PostWithouImage title="Veja a evolução do Front-end na prática" />
        </AsidePostContainer>
      </MainPostContainer>
      <PostsContainer>
        <MainPost
          data="Janeiro 04, 2022"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. "
          image="post-2.png"
          title="10 dicas para conseguir a vaga desejada"
        />
        <MainPost
          data="Janeiro 04, 2022"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. "
          image="post-3.png"
          title="Deixe seu código mais semântico com essas dicas"
        />
        <MainPost
          data="Janeiro 04, 2022"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. "
          image="post-4.png"
          title="Use essas dicas nas suas aplicações mobile"
        />
      </PostsContainer>
    </Container>
  );
}
