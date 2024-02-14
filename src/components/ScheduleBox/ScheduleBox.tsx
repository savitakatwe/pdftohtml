import styled from "styled-components";
import Typography from "../Typography/Typography";

const StyledBox = styled.div`
  width: 100%;
  position: absolute;
`;
const StyledDates = styled.div`
  width: 650px;
  max-width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
`;
const StyledBoxColor = styled.div`
  background-color: #ffffff75;
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
`;
const ScheduleBox = () => {
  return (
    <>
      <StyledBox>
        <StyledDates>
          <StyledBoxColor>
            <Typography variant={"title1"} color={"#404e6a"}>
              SCHEDULE
            </Typography>
            <Typography variant={"small"} color={"black"} fontWeight={"300"}>
              25 NOV 2016 Vestibulum viverra
            </Typography>
            <Typography variant={"small"} color={"black"} fontWeight={"300"}>
              28 NOV 2016 Vestibulum viverra
            </Typography>
            <Typography variant={"small"} color={"black"} fontWeight={"300"}>
              18 NOV 2016 Vestibulum viverra
            </Typography>
            <Typography variant={"small"} color={"black"} fontWeight={"300"}>
              7 JAN 2017 Vestibulum viverra
            </Typography>
          </StyledBoxColor>
        </StyledDates>
      </StyledBox>
    </>
  );
};
export default ScheduleBox;
