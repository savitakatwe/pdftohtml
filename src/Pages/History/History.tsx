import styled from "styled-components";
import page2 from "../../assets/page2.png";
import logo from "../../assets/Logo.png";
import layer01 from "../../assets/layer_01.png";
import historyText from "../../assets/HISTORY.png";
import Typography from "../../components/Typography/Typography";

const StyledImage = styled.img`
  max-height: 100vh;
  position: relative;
  width: 99.9%;
  //height: 100%;
  object-fit: cover;
`;
const StyledP = styled.span`
  position: absolute;
  color: black;
  width: 750px;
  top: 1066px;
  left: 415px;
`;
const StyledLogo = styled.img``;
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
`;
const StyledHeaderItems = styled.div`
  display: flex;
  gap: 10px;
  padding-left: 300px;
  padding-right: 300px;
  align-items: center;
`;

const StyledLayer01 = styled.div`
  position: absolute;
  width: 750px;
  top: 935px;
  left: 348px;
`;
const StyledHistoryText = styled.div`
  position: absolute;
  top: 1002px;
  left: 469px;
`;
const Home = () => {
  return (
    <>
      <div>
        <StyledHeader>
          <StyledHeaderItems>
            <StyledLogo src={logo} alt={logo} />

            <Typography variant={"body"} color={"black"} fontWeight={"300"}>
              LOSANGELES
              <Typography variant={"body"} color={"black"} fontWeight={"300"}>
                MOUNTAINS
              </Typography>
            </Typography>
          </StyledHeaderItems>

          <StyledHeaderItems>
            <Typography variant={"small"} color={"black"} fontWeight={"300"}>
              01.HISTORY
            </Typography>
            <Typography variant={"small"} color={"black"} fontWeight={"300"}>
              02.TEAM
            </Typography>
          </StyledHeaderItems>
        </StyledHeader>
        <StyledImage src={page2} alt="page" />

        <StyledHistoryText>
          <img src={historyText} alt="historyText" />
        </StyledHistoryText>
        <StyledLayer01>
          <img src={layer01} alt="layer01" />
        </StyledLayer01>
        <StyledP>
          <Typography variant={"small"} color={"black"} fontWeight={"400"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus
            est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam.
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
            gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
            dignissim tortor nec congue.{" "}
          </Typography>
        </StyledP>
      </div>
    </>
  );
};
export default Home;
