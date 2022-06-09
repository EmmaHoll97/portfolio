import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselContainer = (props) => {
    const responsive = {
        Small: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        },
        Medium: {
            breakpoint: { max: 992, min: 768 },
            items: 3
        },
        Large: {
            breakpoint: { max: 1200, min: 992 },
            items: 4
        },
        XLarge: {
            breakpoint: { max: 1600, min: 1200 },
            items: 4
        },
        XXL: {
            // the naming can be any, depends on you.
            breakpoint: { max: 1850, min: 1600 },
            items: 4
        },
        XXL: {
            // the naming can be any, depends on you.
            breakpoint: { max: 2560, min: 1850 },
            items: 5
        },
        UltraWideSmall: {
            // the naming can be any, depends on you.
            breakpoint: { max: 3440, min: 2560 },
            items: 6
        },
        UltraWideMedium: {
            // the naming can be any, depends on you.
            breakpoint: { max: 3840, min: 3440 },
            items: 7
        },
        UltraWideLarge: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4320, min: 3840 },
            items: 8
        },
        UltraWideExtraLarge: {
            breakpoint: { max: 5120, min: 4320 },
            items: 8
        }
    };

    return <Carousel
        arrows={props.arrows}
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={props.breakpoints ? props.breakpoints : responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={6000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
    >
    {props.children}
    </Carousel>
}
export default CarouselContainer;