import React from "react";
// @ts-ignore
import s from "./Circle.module.css"

const years = {
    1: "1980-1989",
    2: "1990-1999"
}
const numbers = [1,2]
type CirclePropsType = {
    onChangeEventHandler: (year: string) => void
    year: string
}
export const Circle: React.FC<CirclePropsType> = ({onChangeEventHandler, year}) => {
    return (
        <div className={s.circle}>
            {/*{numbers.map((n) =>*/}
            {/*    <div className={s.logo} onClick={() => onChangeEventHandler(n)}>*/}
            {/*        {n}*/}
            {/*    </div>*/}
            {/*)}*/}
            <div>{year}</div>

            <div className={s.logo} onClick={() => onChangeEventHandler(years[1])}>1</div>
            <div onClick={() => onChangeEventHandler(years[2])}>2</div>
        </div>
    );
};
