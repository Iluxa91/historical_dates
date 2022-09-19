import React from "react";
// @ts-ignore
import s from "./Events.module.css"
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "../../node_modules/swiper/swiper.less";
import "../../node_modules/swiper/modules/navigation/navigation.less"
// import Swiper core and required modules
// @ts-ignore
import SwiperCore, {Navigation} from "swiper/core";
import {EventType} from "./App";

// install Swiper modules
SwiperCore.use([Navigation]);

type EventsPropsType = {
    events: EventType[]
}

export const Events: React.FC<EventsPropsType> = ({events}) => {

    return (
        <>
            <Swiper
                slidesPerView={4}
                centeredSlides={false}
                spaceBetween={30}
                pagination={{"type": "fraction"}}
                navigation={true}
                className="mySwiper"
            >
                {events.map((e) => <SwiperSlide>
                    <div>{e.title}</div>
                    <div>{e.description}</div>
                    <div>{e.director}</div>
                </SwiperSlide>)}
            </Swiper>
        </>
    );
};