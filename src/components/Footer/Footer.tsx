import logo from "../../assets/Logo.png";
import Typography from "../Typography/Typography";
import styled from "styled-components";

const StyledLogo = styled.img``;
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  max-width: 100%;
  margin: auto;
  position: relative;
`;
const StyledHeaderItems = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const StyledDiv = styled.div`
  background-color: #404e6a;
  width: 100%;
`;

const Footer = () => {
  return (
    <StyledDiv>
      <StyledHeader>
        <StyledHeaderItems>
          <StyledLogo src={logo} alt={logo} />

          <Typography variant={"body"} color={"lightgrey"} fontWeight={"300"}>
            LOSANGELES
            <Typography variant={"body"} color={"lightgrey"} fontWeight={"300"}>
              MOUNTAINS
            </Typography>
          </Typography>
        </StyledHeaderItems>

        <StyledHeaderItems>
          <Typography variant={"small"} color={"lightgrey"} fontWeight={"300"}>
            COPYRIGHT 2014.ALL RIGHTS RESERVED
          </Typography>
        </StyledHeaderItems>
      </StyledHeader>
    </StyledDiv>
  );
};

export default Footer;
