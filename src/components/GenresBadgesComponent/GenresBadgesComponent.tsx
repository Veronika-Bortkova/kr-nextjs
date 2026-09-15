import React, {FC} from 'react';
import {getGenres} from "@/src/services/api.service";
import GenreBadgeComponent from "@/src/components/GenreBadgeComponent/GenreBadgeComponent";
import "./GenresBadgesComponent.css"

type Props =  {
     genreId?: string;
}

const GenresBadgesComponent:FC<Props> = async ({genreId}) => {
    const {genres} = await getGenres();
    const selectedGenreId = genreId;


    return (
        <div  className={"bageList"}>
            <ul>
                {genres.map(genre => <GenreBadgeComponent genre={genre} key={genre.id}/>)}
            </ul>

        </div>
    );
};

export default GenresBadgesComponent;