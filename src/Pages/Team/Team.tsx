import styled from "styled-components";
import page3 from "../../assets/page3.png";

const StyledImage = styled.img`
  max-height: 100vh;
  position: relative;
`;
const StyledText = styled.span`
  position: absolute;
  color: black;
`;

const Home = () => {
  return (
    <>
      <div>
        <StyledImage src={page3} alt="page" />
        <StyledText>Home</StyledText>
      </div>
    </>
  );
};
export default Home;
