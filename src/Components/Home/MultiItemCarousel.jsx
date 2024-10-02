import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarouselItems from "./CarouselItems";
import {topMeals} from "./topMeals";

const MultiItemCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        arrows:false
    };
    return (
        <div>
            <Slider {...settings}>
                {topMeals.map((item) => (
                    <CarouselItems image={item.image} title={item.title} key={item.id}/>
                ))}
            </Slider>

        </div>
    )
}
export default MultiItemCarousel
