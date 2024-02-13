import styled from "styled-components";
import { PropsWithChildren } from "react";
const StyledImage = styled.img``;

interface IBackgroundImageProps {
  pagePng: string;
}
const BackgroundImage = ({
  children,
  pagePng,
}: PropsWithChildren<IBackgroundImageProps>) => {
  return (
    <>
      <div>
        <StyledImage src={pagePng} alt="page" height={"100vh"}>
          {children}
        </StyledImage>
      </div>
    </>
  );
};
export default BackgroundImage;
