import React, {FC} from 'react';
import {IGenre} from "@/src/models/GenreModel";
import "./GenreBadgeComponent.css"
import Link from "next/link";

type PropsType = {
    genre: IGenre;
    isActive: boolean
}

const GenreBadgeComponent: FC<PropsType> = ({genre, isActive}) => {
    return (
        <>
            <li className={"badgeLi"}>
                <Link href={"/?genreId=" + genre.id} className={isActive ? "badgeA active" : "badgeA"}>
                    <div className={"badge"}>{genre.name}</div>
                </Link>
            </li>
        </>
    );
};

export default GenreBadgeComponent;