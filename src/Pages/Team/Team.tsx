import styled from "styled-components";
import page3 from "../../../public/page3.png";
import Header from "../../components/Header/Header";
import TeamHeader from "../../components/TeamHeader/TeamHeader";

const StyledContainer = styled.div`
  background: url("./page3.png");
  height: 100vh;
  background-size: cover;
  padding: 30px;
`;

const StyledContainer1 = styled.div`
  width: 700px;
  max-width: 100%;
  margin: auto;
`;

const Home = () => {
  return (
    <>
      <Header />
      <TeamHeader />
      <StyledContainer>
        <StyledContainer1></StyledContainer1>
      </StyledContainer>
    </>
  );
};
export default Home;
