import React from "react";

type DatesPropsType = {
    year: string
}
export const Dates: React.FC<DatesPropsType> = ({year}) => {
    return (
        <div>
            {year}

        </div>
    );
};