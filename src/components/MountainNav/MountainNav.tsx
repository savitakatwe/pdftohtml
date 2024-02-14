import Typography from "../Typography/Typography";
import styled from "styled-components";

const StyledNav = styled.div`
  background-color: #404e6a;
  padding: 10px;
`;
const StyledNavItem = styled.div`
  width: 650px;
  max-width: 100%;
  margin: auto;
  display: flex;
  gap: 25px;
`;
const MountainNav = () => {
  return (
    <>
      <StyledNav>
        <StyledNavItem>
          <Typography
            variant={"body"}
            color={"lightgrey"}
            textDecoration={"underline"}
          >
            MOUNTAIN1
          </Typography>
          <Typography
            variant={"body"}
            color={"lightgrey"}
            textDecoration={"underline"}
          >
            MOUNTAIN2
          </Typography>
        </StyledNavItem>
      </StyledNav>
    </>
  );
};
export default MountainNav;
