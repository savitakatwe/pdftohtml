import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const StyledImages = styled.div`
  width: 700px;
  max-width: 100%;
  margin: auto;
`;

const CarouselBox = () => {
  return (
    <>
      <StyledImages>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>
            <img src={"./item1.png"} alt={"item1"} />
          </div>
          <div>
            <img src={"./item2.png"} alt={"item2"} />
          </div>
          <div>
            <img src={"./item1.png"} alt={"item1"} />
          </div>
          <div>
            <img src={"./item2.png"} alt={"item2"} />
          </div>
          <div>
            <img src={"./item1.png"} alt={"item1"} />
          </div>
          <div>
            <img src={"./item2.png"} alt={"item2"} />
          </div>
          <div>
            <img src={"./item1.png"} alt={"item1"} />
          </div>
          <div>
            <img src={"./item2.png"} alt={"item2"} />
          </div>
        </Carousel>
      </StyledImages>
    </>
  );
};
export default CarouselBox;
