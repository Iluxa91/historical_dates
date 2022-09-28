import React, {useState} from "react";
import "./App.scss"
import {Events} from "./Events";
import {Circle} from "./Circle";
import {dates} from "./"

export type EventType = { title: string, description: string, director: string }

export const App = () => {
    const [year, setYear] = useState("1970-1979")
    const onChangeEventHandler = (year: string) => {
        setYear(year)
    }

    return (
        <div className={'appBlock'}>
            <Circle onChangeEventHandler={onChangeEventHandler} year={year}/>
            <Events events={dates[year]}/>
        </div>
    );
}