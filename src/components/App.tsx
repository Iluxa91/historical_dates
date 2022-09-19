import React, {useState} from "react";
import "./App.css"
import {Events} from "./Events";
import {Circle} from "./Circle";

export type EventType = {title: string, description: string, director: string}

const dates: { [key: string]: EventType[] } = {
    ["1980-1989"]: [
        {
            title: `Назад в будущее Back to the Future`,
            description: `1985, 116 мин.США • фантастика`,
            director: `Режиссёр: Роберт Земекис`
        },
        {
            title: `Приключения Шерлока Холмса и доктора Ватсона: Собака Баскервилей`,
            description: `1981, 154 мин. СССР • детектив`,
            director: `Режиссёр: Игорь Масленников`
        },
        {
            title: `Остров сокровищ`,
            description: `1988, 107 мин. СССР • мультфильм`,
            director: `Режиссёр: Давид Черкасский`
        },
        {
            title: `Остров сокровищ`,
            description: `1988, 107 мин. СССР • мультфильм`,
            director: `Режиссёр: Давид Черкасский`
        },
        {
            title: `Остров сокровищ`,
            description: `1988, 107 мин. СССР • мультфильм`,
            director: `Режиссёр: Давид Черкасский`
        },
    ],
    ["1990-1999"]: [
        {
            title: `Зеленая миля The Green Mile`,
            description: `1999, 189мин. США • драма`,
            director: `Режиссёр: Фрэнк Дарабонт`
        },
        {
            title: `Список Шиндлера Schindler's List,`,
            description: `1993, 195 мин. США • драма `,
            director: `Режиссёр: Стивен Спилберг`
        },
        {
            title: `Побег из Шоушенка The Shawshank Redemption`,
            description: `1994, 142 мин. США • драма`,
            director: `Режиссёр: Фрэнк Дарабонт`
        },
        {
            title: `Зеленая миля The Green Mile`,
            description: `1999, 189мин. США • драма`,
            director: `Режиссёр: Фрэнк Дарабонт`
        },
        {
            title: `Список Шиндлера Schindler's List,`,
            description: `1993, 195 мин. США • драма `,
            director: `Режиссёр: Стивен Спилберг`
        },
        {
            title: `Побег из Шоушенка The Shawshank Redemption`,
            description: `1994, 142 мин. США • драма`,
            director: `Режиссёр: Фрэнк Дарабонт`
        },
    ]
}

export const App = () => {
    const [year, setYear] = useState("1980-1989")
    const onChangeEventHandler = (year: string) => {
        setYear(year)
    }

    return (
        <div className={"app"}>
            <Circle onChangeEventHandler={onChangeEventHandler} year={year}/>
            <Events events={dates[year]}/>
        </div>
    );
}