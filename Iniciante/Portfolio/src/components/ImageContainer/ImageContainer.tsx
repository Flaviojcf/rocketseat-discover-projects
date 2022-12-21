import { ImageCircleContainer } from "./styles";

interface ImageContainerProps {
  hasBorder?: boolean;
}

export function ImageContainer({ hasBorder }: ImageContainerProps) {
  return (
    <ImageCircleContainer>
      <img className={hasBorder ? "hasBorder" : ""} src="/I.png" />
    </ImageCircleContainer>
  );
}
