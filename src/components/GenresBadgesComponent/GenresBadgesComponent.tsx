import React, {FC} from 'react';
import {getGenres} from "@/src/services/api.service";
import GenreBadgeComponent from "@/src/components/GenreBadgeComponent/GenreBadgeComponent";
import "./GenresBadgesComponent.css"

type Props =  {
    searchParams: { genreId?: string };
}

const GenresBadgesComponent:FC<Props> = async ({searchParams}) => {
    const {genres} = await getGenres();
    const selectedGenreId = searchParams?.genreId;


    return (
        <div  className={"bageList"}>
            <ul>
                {genres.map(genre => <GenreBadgeComponent genre={genre} key={genre.id} isActive={selectedGenreId === String(genre.id)}/>)}
            </ul>

        </div>
    );
};

export default GenresBadgesComponent;