import React, {FC} from 'react';
import {getGenres} from "@/src/services/api.service";
import "./GenreNameListComponent.css"
import {IGenre} from "@/src/models/GenreModel";

type propsType = {
    genres: number[]
}

const GenreNameListComponent: FC<propsType> = async ({genres}) => {
const {genresDictionary} = await getGenres();

    return (
        <>
            {genres.map(value => <span key={value}>{genresDictionary[value]}</span>)}
        </>
    );
};

export default GenreNameListComponent;