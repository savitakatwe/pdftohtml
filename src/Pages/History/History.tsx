import styled from "styled-components";
import page2 from "../../assets/page2.png";
import logo from "../../assets/Logo.png";

const StyledImage = styled.img`
  max-height: 100vh;
  position: relative;
`;
const StyledText = styled.span`
  position: absolute;
  color: black;
`;
const StyledLogo = styled.img``;
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledHeaderItems = styled.div`
  display: flex;
  gap: 10px;
`;

const Home = () => {
  return (
    <>
      <div>
        <StyledHeader>
          <StyledHeaderItems>
            <StyledLogo src={logo} alt={logo} />
            <h1>LOSANGELES MOUNTAINS</h1>
          </StyledHeaderItems>

          <StyledHeaderItems>
            <h1>01.HISTORY</h1>
            <h1>02.TEAM</h1>
          </StyledHeaderItems>
        </StyledHeader>
        <StyledImage src={page2} alt="page" />
        <StyledText>Home</StyledText>
      </div>
    </>
  );
};
export default Home;
