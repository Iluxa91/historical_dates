import React from "react";
// @ts-ignore
import s from "./Events.module.scss"
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles.scss
import "../../node_modules/swiper/swiper.scss";
import "../../node_modules/swiper/modules/navigation/navigation.scss"
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
                slidesPerView={3}
                centeredSlides={false}
                spaceBetween={30}
                pagination={{"type": "fraction"}}
                navigation={true}
                className="mySwiper"
            >
                {events.map((e) => <SwiperSlide>
                    <div className={s.yearText}>{e.year}</div>
                    <div>{e.title}</div>
                    <div>{e.description}</div>
                    <div>Режиссер: {e.director}</div>
                </SwiperSlide>)}
            </Swiper>
        </>
    );
};