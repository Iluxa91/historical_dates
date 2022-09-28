import React from "react";
// @ts-ignore
import s from "./Circle.module.scss"
// @ts-ignore
import right from "../common/images/right.svg"
// @ts-ignore
import left from "../common/images/left.svg"

type YearsType = {
    [key: number]: string
}
const years: YearsType = {
    1: "1970-1979",
    2: "1980-1989",
    3: "1990-1999",
    4: "2000-2009",
    5: "2010-2019",
    6: "2020-2025",
}
const points = [1, 2, 3, 4, 5, 6]

type CirclePropsType = {
    onChangeEventHandler: (year: string) => void
    year: string
}

export const Circle: React.FC<CirclePropsType> = ({onChangeEventHandler, year}) => {

    let currentYear = Object.entries(years).find(ind => ind[1] === year)

    const setPage = (value: string) => {
        if (value === "minus" && year !== years[1]) {
            onChangeEventHandler(years[+currentYear[0] - 1])
        } else if (value === "plus" && year !== years[6]) {
            onChangeEventHandler(years[+currentYear[0] + 1])
        }
    }
    return (
        <div className="advantages">
            <div className="titleYear">{year}</div>
            <ul className="advantages-circle">
                {points.map((p) =>
                    <li onClick={() => onChangeEventHandler(years[p])}
                        key={p}
                        className="advantages-circle__element">
                        {
                            <div>
                                <div className={
                                    years[p] === currentYear[1] ? "active" : "passive"}>
                                    <div>{p}</div>
                                </div>
                                {years[p] === currentYear[1] &&
                                    <div className={"pointTitle"}>Cinema</div>}
                            </div>
                        }
                    </li>
                )}
            </ul>
            <div style={{position: "absolute", bottom: '56px' }}>
                <div> {+currentYear[0]}/{points.length}</div>
                <button className={s.button} disabled={year === years[1]}
                        onClick={() => setPage("minus")}><img src={left}/></button>
                <button className={s.button} disabled={year === years[6]}
                        onClick={() => setPage("plus")}><img src={right}/></button>
            </div>
        </div>
    );
};
