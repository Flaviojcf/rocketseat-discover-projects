import { Container, GridPost } from "./styles";
interface MainPostProps {
  mainPost?: boolean;
  data: string;
  title: string;
  description: string;
  image: string;
}
export function MainPost({
  mainPost = false,
  data,
  description,
  image,
  title,
}: MainPostProps) {
  return (
    <>
      {mainPost ? (
        <Container>
          <img src={image} />
          <p>{data}</p>
          <h1>{title}</h1>
          <h2>{description}</h2>
        </Container>
      ) : (
        <GridPost>
          <img src={image} />
          <p>{data}</p>
          <h1>{title}</h1>
          <h2>{description}</h2>
        </GridPost>
      )}
    </>
  );
}
