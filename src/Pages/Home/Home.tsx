import styled from "styled-components";
import page1 from "../../assets/page1.png";
import Typography from "../../components/Typography/Typography";

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;
const StyledText = styled.span`
  position: absolute;
  color: black;
`;
const StyledDiv = styled.span`
  max-width: 100%;
  min-width: 200px; /* Adjust this value as needed */
  height: auto;
`;

const Home = () => {
  return (
    <>
      <div>
        <StyledDiv>
          <StyledImage src={page1} alt="page" />
        </StyledDiv>
      </div>
    </>
  );
};
export default Home;
