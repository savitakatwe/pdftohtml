import styled from "styled-components";
import page3 from "../../assets/page3.png";

const StyledImage = styled.img`
  max-height: 100vh;
  position: relative;
  width: 99.9%;
  //height: 100%;
  object-fit: cover;
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
      </div>
    </>
  );
};
export default Home;
