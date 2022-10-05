import React from "react";
import "./CircleItems.scss"
import {points, years} from "../Circle";

type CircleItemsType = {
    onChangeEventHandler: (year: string) => void
    currentYear: string
}

export const CircleItems: React.FC<CircleItemsType> = ({onChangeEventHandler, currentYear}) => {
    return (
        <ul className="advantages-circle">
            {points.map((p) =>
                <li onClick={() => onChangeEventHandler(years[p])}
                    key={p}
                    className="advantages-circle__element"
                >
                    {
                        <div className={"item"}>
                            <div className={
                                `${years[p] === currentYear ? "active" : "passive"}`}>
                                <div>{p}</div>
                            </div>
                            {years[p] === currentYear &&
                                <div className="pointTitle">Cinema</div>}
                        </div>
                    }
                </li>
            )}
        </ul>
    );
};