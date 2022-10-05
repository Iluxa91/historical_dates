import React, {useEffect, useState} from "react";
import "./Circle.scss"
import {Buttons} from "./Buttons/Buttons";
import {CircleItems} from "./CircleItems/CircleItems";

export type YearsType = {
    [key: number]: string
}
export const years: YearsType = {
    1: "1970-1979",
    2: "1980-1989",
    3: "1990-1999",
    4: "2000-2009",
    5: "2010-2019",
    6: "2020-2025",
}
export const points = [1, 2, 3, 4, 5, 6]

type CirclePropsType = {
    onChangeEventHandler: (year: string) => void
    year: string
    prevYear: string
}

export const Circle: React.FC<CirclePropsType> = ({
                                                      onChangeEventHandler,
                                                      year,
                                                      prevYear
                                                  }) => {

    let [beginningYear, setBeginningYear] = useState(+prevYear.slice(0, 4))
    let [endingYear, setEndingYear] = useState(+prevYear.slice(-4))
    let currentYear = Object.entries(years).find(ind => ind[1] === year)

    useEffect(() => {
        setBeginningYear(+prevYear.slice(0, 4))
        setEndingYear(+prevYear.slice(-4))
    }, [prevYear])

    useEffect(() => {
        beginningYear < +year.slice(0, 4) && setTimeout(() => setBeginningYear(beginningYear + 1), 50)
        beginningYear > +year.slice(0, 4) && setTimeout(() => setBeginningYear(beginningYear - 1), 50)
        endingYear < +year.slice(-4) && setTimeout(() => setEndingYear(endingYear + 1), 50)
        endingYear > +year.slice(-4) && setTimeout(() => setEndingYear(endingYear - 1), 50)
    }, [year, beginningYear, endingYear])

    return (
        <div className="advantages">
            <div className="yearTitle">
                <span>{beginningYear}</span><span>{endingYear}</span></div>
            <div className="dateTitle">Исторические даты</div>
            <CircleItems onChangeEventHandler={onChangeEventHandler}
                         currentYear={currentYear[1]}/>
            <Buttons onChangeEventHandler={onChangeEventHandler}
                     year={year}
                     currentYear={+currentYear[0]}/>
        </div>
    );
};
