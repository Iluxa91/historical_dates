import React, {useEffect, useRef, useState} from "react";
import "./Circle.scss"
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

    const setPage = (value: string) => {
        if (value === "minus" && year !== years[1]) {
            onChangeEventHandler(years[+currentYear[0] - 1])
        } else if (value === "plus" && year !== years[6]) {
            onChangeEventHandler(years[+currentYear[0] + 1])
        }
    }

    useEffect(() => {
        setBeginningYear(+prevYear.slice(0, 4))
        setEndingYear(+prevYear.slice(-4)) //2019
    }, [prevYear])

    useEffect(() => {
        beginningYear < +year.slice(0, 4) && setTimeout(() => setBeginningYear(beginningYear + 1), 50)
        beginningYear > +year.slice(0, 4) && setTimeout(() => setBeginningYear(beginningYear - 1), 50)
        endingYear < +year.slice(-4) && setTimeout(() => setEndingYear(endingYear + 1), 50)
        endingYear > +year.slice(-4) && setTimeout(() => setEndingYear(endingYear - 1), 50)
    }, [year, beginningYear, endingYear])

    // el.addEventListener("ul", () => {
    //     let rot = itr.value;
    //     theG.setAttribute("transform", `rotate(${rot} 700 -40)`)
    //     dot2006.setAttribute("transform", `rotate(${-rot} 302 480)`);
    //     dot2007.setAttribute("transform", `rotate(${-rot} 700 600)`);
    //     dot2008.setAttribute("transform", `rotate(${-rot} 1100 480)`);
    // });
    let ref = useRef(null)
    let rotate

    useEffect(() => {
        rotate = window.getComputedStyle(ref.current).transform;
    },[])

   // const angle = (i:any) => {
   //      let arr = i.match(/-?\d+\.?\d+[^,]/gi);
   //      let [cos, sin] = [arr[0], arr[1]];
   //
   //      let degree = Math.round(Math.asin(sin) * (180 / Math.PI));
   //      if (cos < 0) {
   //          let addDegree = 90 - Math.round(Math.asin(sin) * (180 / Math.PI));
   //          degree = 90 + addDegree;
   //      }
   //      if (degree < 0) {
   //          degree = 360 + degree;
   //      }
   //      return degree;
   //  }
   //  console.log(angle(rotate))

    return (
        <div className="advantages">
            <div className="yearTitle">
                <span>{beginningYear}</span><span>{endingYear}</span></div>
            <div className="dateTitle">Исторические даты</div>
            <ul className={"advantages-circle"} id="itr" ref={ref}>
                {points.map((p) =>
                    <li onClick={() => onChangeEventHandler(years[p])}
                        key={p}
                        className="advantages-circle__element"
                    >
                        {
                            <div className={"item"}>
                                <div className={
                                    `${years[p] === currentYear[1] ? "active" : "passive"}`}>
                                    <div>{p}</div>
                                </div>
                                {years[p] === currentYear[1] &&
                                    <div className="pointTitle">Cinema</div>}
                            </div>
                        }
                    </li>
                )}
            </ul>
            <div className={"buttonContainer"}>
                <div>0{+currentYear[0]}/0{points.length}</div>
                <button disabled={year === years[1]}
                        onClick={() => setPage("minus")}><img src={left}/></button>
                <button disabled={year === years[6]}
                        onClick={() => setPage("plus")}><img src={right}/></button>
            </div>
        </div>
    );
};
