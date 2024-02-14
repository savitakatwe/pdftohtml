import styled from "styled-components";
import Typography from "../Typography/Typography";
import climbText from "../../assets/CLIMB.png";

const StyledContainer = styled.div`
  width: 650px;
  max-width: 100%;
  margin: auto;
  display: flex;
  padding: 10px;
`;
const StyledClimb = styled.div`
  padding-top: 65px;
  margin-left: -23px;
`;
const StyledParagraph = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 30px;
  padding-left: 10px;
`;

const TeamHeader = () => {
  return (
    <>
      <StyledContainer>
        <img src={"./layer_02.png"} alt="layer" />
        <StyledClimb>
          <img src={climbText} alt="climbText" />
        </StyledClimb>
        <StyledParagraph>
          <Typography variant={"small"} color={"black"} fontWeight={"400"}>
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
            gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
            dignissim tortor nec congue.{" "}
          </Typography>
        </StyledParagraph>
      </StyledContainer>
    </>
  );
};
export default TeamHeader;
