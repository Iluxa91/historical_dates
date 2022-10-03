import React, {useState} from "react";
import "./App.scss"
import {Events} from "./Events";
import {Circle} from "./Circle";
import {dates} from "./"

export type EventType = { year: number, title: string, description: string, director: string }

export const App = () => {
    const [year, setYear] = useState("1970-1979")
    const [prevYear, setPrevYear] = useState(year)
    const onChangeEventHandler = (value: string) => {
        setYear(value)
        setPrevYear(year)
    }

    return (
        <div className={'appBlock'}>
            <Circle onChangeEventHandler={onChangeEventHandler} year={year} prevYear={prevYear}/>
            <Events events={dates[year]}/>
        </div>
    );
}