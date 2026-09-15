import React, {FC} from 'react';
import {IGenre} from "@/src/models/GenreModel";
import "./GenreBadgeComponent.css"
import Link from "next/link";

type PropsType = {
    genre: IGenre;
}

const GenreBadgeComponent: FC<PropsType> = ({genre}) => {
    return (
        <>
            <li className={"badgeLi"}>

                <Link href={"/movies_of_genre/" + genre.id} className={"badgeA"}>
                    <div className={"badge"}>{genre.name}</div>
                </Link>
            </li>
        </>
    );
};

export default GenreBadgeComponent;