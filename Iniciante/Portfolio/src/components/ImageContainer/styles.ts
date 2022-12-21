import styled from "styled-components";

export const ImageCircleContainer = styled.div`
  display: flex;
  background: ${(props) => props.theme.colors["purple-500"]};

  > img {
    width: 128px;
    height: 128px;
    border-radius: 50%;
  }
  .hasBorder {
    border: 1px solid ${(props) => props.theme.colors.green};
  }
`;
