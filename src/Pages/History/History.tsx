import styled from "styled-components";
import layer01 from "../../assets/layer_01.png";
import historyText from "../../assets/HISTORY.png";
import Typography from "../../components/Typography/Typography";
import Header from "../../components/Header/Header";

const StyledContainer = styled.div`
  background: url("./page2.png");
  height: 100vh;
  background-size: cover;
  padding: 30px;
`;

const StyledContainer1 = styled.div`
  width: 700px;
  max-width: 100%;
  margin: auto;
`;

const StyledLayer01 = styled.div`
  //position: absolute;
  //width: 750px;
  //top: 935px;
  //left: 348px;
`;
const StyledHistoryText = styled.div`
  //position: absolute;
  //top: 1002px;
  //left: 469px;
`;
const Home = () => {
  return (
    <>
      <Header />
      <StyledContainer>
        <StyledContainer1>
          <StyledHistoryText>
            <img src={historyText} alt="historyText" />
          </StyledHistoryText>
          <StyledLayer01>
            <img src={layer01} alt="layer01" />
          </StyledLayer01>
          <Typography variant={"small"} color={"black"} fontWeight={"400"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus
            est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam.
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
            gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
            dignissim tortor nec congue.{" "}
          </Typography>
        </StyledContainer1>
      </StyledContainer>
    </>
  );
};
export default Home;
