import React from "react";
// @ts-ignore
import left from "../../../common/images/left.svg";
// @ts-ignore
import right from "../../../common/images/right.svg";
import "./Buttons.scss"
import {points, years} from "../Circle";

type ButtonsPropsType = {
    currentYear: number
    year: string
    onChangeEventHandler: (year: string) => void
}
export const Buttons: React.FC<ButtonsPropsType> = ({
                                                        currentYear,
                                                        year,
                                                        onChangeEventHandler
                                                    }) => {

    const setPage = (value: string) => {
        if (value === "minus" && year !== years[1]) {
            onChangeEventHandler(years[currentYear - 1])
        } else if (value === "plus" && year !== years[6]) {
            onChangeEventHandler(years[currentYear + 1])
        }
    }
    return (
        <div className={"buttonContainer"}>
            <div>0{currentYear}/0{points.length}</div>
            <button disabled={year === years[1]}
                    onClick={() => setPage("minus")}>
                <img src={left}/></button>
            <button disabled={year === years[6]}
                    onClick={() => setPage("plus")}>
                <img src={right}/></button>
        </div>
    );
};