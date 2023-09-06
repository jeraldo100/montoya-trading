import React from 'react'
import '../Styles/HomeCarousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { BiSolidChevronsLeft } from "react-icons/bi";
import { BiSolidChevronsRight } from "react-icons/bi";

function HomeCarousel() {
    let slides = [
        {id: 1, name:"name1", pic:"https://picsum.photos/1280/560?random=1"},
        {id: 2, name:"name2", pic:"https://picsum.photos/1280/560?random=2"},
        {id: 3, name:"name3", pic:"https://picsum.photos/1280/560?random=3"},
        {id: 4, name:"name4", pic:"https://picsum.photos/1280/560?random=4"},
    ];

    return (
        <>
            <div id='homeCarousel'>
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={4000}
                    infiniteLoop={true}

                    renderArrowPrev={(clickHandler) => {
                        return(
                            <div className="carouselArrows prevArrow" onClick={clickHandler}>
                                <BiSolidChevronsLeft />
                            </div>
                        )
                    }}
                    renderArrowNext={(clickHandler) => {
                        return(
                            <div className="carouselArrows nextArrow" onClick={clickHandler}>
                                <BiSolidChevronsRight />
                            </div>
                        )
                    }}
                >
                    {slides.map((slide) => {return(
                        <div key={slide.id}>
                            <img src={slide.pic} />
                        </div>
                    )})}
                    {/* <div>
                        <img key={id} src={pic} />
                    </div> */}
                </Carousel>
            </div>
        </>
    )
}

export default HomeCarousel