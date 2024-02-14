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
const StyledShadow = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  color: #404e6a;
  z-index: 1;
`;

const Footer = () => {
  return (
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
          COPYRIGHT 2014.ALL RIGHTS RESERVED
        </Typography>
      </StyledHeaderItems>
      <StyledShadow></StyledShadow>
    </StyledHeader>
  );
};

export default Footer;
