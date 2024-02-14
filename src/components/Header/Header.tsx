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
`;
const StyledHeaderItems = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Header = () => {
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
        <a href={"#history"}>
          <Typography
            variant={"small"}
            color={"black"}
            fontWeight={"300"}
            textDecoration={"underline"}
            fontStyle={"italic"}
          >
            01.HISTORY
          </Typography>
        </a>
        <a href={"#team"}>
          <Typography
            variant={"small"}
            color={"black"}
            fontWeight={"300"}
            textDecoration={"underline"}
            fontStyle={"italic"}
          >
            02.TEAM
          </Typography>
        </a>
      </StyledHeaderItems>
    </StyledHeader>
  );
};

export default Header;
