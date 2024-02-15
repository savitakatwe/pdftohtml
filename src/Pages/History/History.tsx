import styled from "styled-components";
import layer01 from "../../assets/layer_01.png";
import historyText from "../../assets/HISTORY.png";
import Typography from "../../components/Typography/Typography";
import Header from "../../components/Header/Header";
import CarouselBox from "../../components/CarouselBox/CarouselBox";
import React from "react";

const StyledContainer = styled.div`
  background: url("./page2.png");
  height: 100vh;
  background-size: cover;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledContainer1 = styled.div`
  width: 700px;
  max-width: 100%;
  margin: 0 auto;
`;

const History = () => {
  return (
    <>
      <div id={"history"}>
        <Header />
        <StyledContainer>
          <StyledContainer1>
            <div>
              <img src={historyText} alt="historyText" />
            </div>
            <div>
              <img src={layer01} alt="layer01" />
            </div>
            <Typography variant={"small"} color={"black"} fontWeight={"400"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
              ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus
              est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt
              quam. Cras scelerisque id quam sed dignissim Pellentesque urna
              nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus
              suscipit dignissim tortor nec congue.{" "}
            </Typography>
          </StyledContainer1>
          <CarouselBox />
        </StyledContainer>
      </div>
    </>
  );
};
export default History;
