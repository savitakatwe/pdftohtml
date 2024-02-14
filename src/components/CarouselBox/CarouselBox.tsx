import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const StyledImages = styled.div`
  width: 700px;
  max-width: 100%;
  margin: auto;
`;
const StyledBackground = styled.div`
  background-color: #404e6ad4;
  min-width: 100%;
`;

const CarouselBox = () => {
  return (
    <>
      <StyledBackground>
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
              <img src={"./item2.png"} alt={"item1"} />
            </div>
            <div>
              <img src={"./item1.png"} alt={"item2"} />
            </div>
            <div>
              <img src={"./item2.png"} alt={"item1"} />
            </div>
            <div>
              <img src={"./item1.png"} alt={"item2"} />
            </div>
          </Carousel>
        </StyledImages>
      </StyledBackground>
    </>
  );
};
export default CarouselBox;
