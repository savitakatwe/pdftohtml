import styled from "styled-components";
import Typography from "../../components/Typography/Typography";
import Header from "../../components/Header/Header";

const StyledContainer1 = styled.div`
  width: 700px;
  max-width: 100%;
  margin: auto;
`;

const StyledContainer = styled.div`
  background: url("./page1.png");
  height: 100vh;
  background-size: cover;
  padding: 30px;
`;

const Home = () => {
  console.log(window.innerWidth);
  return (
    <>
      <Header />
      <StyledContainer>
        <StyledContainer1>
          {window.innerWidth < 370 ? (
            <>
              <Typography variant={"head"} color={"#4d4d4d"}>
                LOSANGELES
              </Typography>
              <Typography
                variant={"head"}
                color={"#404e6a"}
                lineHeight={"40px"}
              >
                MOUNTAINS
              </Typography>{" "}
            </>
          ) : (
            <>
              {" "}
              <Typography variant={"headLine"} color={"#4d4d4d"}>
                LOSANGELES
              </Typography>
              <Typography
                variant={"headLine"}
                color={"#404e6a"}
                lineHeight={"40px"}
              >
                MOUNTAINS
              </Typography>
            </>
          )}
        </StyledContainer1>
      </StyledContainer>
    </>
  );
};
export default Home;
