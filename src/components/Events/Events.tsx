import React from "react";
import "./Events.scss"
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/scss'
import 'swiper/scss/navigation'
// @ts-ignore
import SwiperCore, {Navigation} from "swiper/core";

SwiperCore.use([Navigation]);

export type EventType = { year: number, title: string, description: string, director: string }
type EventsPropsType = {
    events: EventType[]
}

export const Events: React.FC<EventsPropsType> = ({events}) => {
    return (
        <div className="swiperContainer">
            <Swiper
                slidesPerView={3.5}
                centeredSlides={false}
                spaceBetween={30}
                pagination={{"type": "fraction"}}
                navigation={true}
                className="mySwiper"
            >
                {events.map((e, index) => <SwiperSlide key={index}>
                    <div className="yearText">{e.year}</div>
                    <div>{e.title}</div>
                    <div>{e.description}</div>
                    <div>Режиссер: {e.director}</div>
                </SwiperSlide>)}
            </Swiper>
        </div>
    );
};