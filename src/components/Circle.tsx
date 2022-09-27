import React from "react";
// @ts-ignore
import s from "./Circle.module.scss"

type YearsType = {
    [key:number]:string
}
const years: YearsType = {
    1: "1980-1989",
    2: "1990-1999",
    3: "2000-2009",
    4: "2010-2019"
}
const numbers = [1, 2, 3, 4, 5, 6]

type CirclePropsType = {
    onChangeEventHandler: (year: string) => void
    year: string
}
export const Circle: React.FC<CirclePropsType> = ({onChangeEventHandler, year}) => {
    let currentYear = Object.entries(years).find(ind=>ind[1]===year)
    const setPage = (value: string) => {
        if(value==='minus'&&year!==years[1]){
            onChangeEventHandler(years[+currentYear[0]-1])
        } else if (value==='plus'&&year!==years[4]){
            onChangeEventHandler(years[+currentYear[0]+1])
        }
    }
    return (
        <div className='advantages'>
            <div className='titleYear'>{year}</div>
            <ul className='advantages-circle'>
            {numbers.map((n) =>
                <li key={n} className="advantages-circle__element" >
                    <div onClick={() => onChangeEventHandler(years[n])}>{n}</div>
                </li>
            )}
            </ul>

            <div> {+currentYear[0]}/{numbers.length}</div>
            <button className={s.button} disabled={year===years[1]} onClick={()=>setPage('minus')}>{'<'}</button>
            <button className={s.button} disabled={year===years[4]} onClick={()=>setPage('plus')}>{'>'}</button>
            {/*<div className={s.logo} onClick={() => onChangeEventHandler(years[1])}>1</div>*/}
            {/*<div onClick={() => onChangeEventHandler(years[2])}>2</div>*/}
            {/*<div onClick={() => onChangeEventHandler(years[3])}>3</div>*/}
            {/*<div onClick={() => onChangeEventHandler(years[4])}>4</div>*/}
        </div>
    );
};
