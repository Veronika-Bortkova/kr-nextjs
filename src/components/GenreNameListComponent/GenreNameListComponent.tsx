import React, {FC} from 'react';
import {getGenres} from "@/src/services/api.service";
import "./GenreNameListComponent.css"
import {IGenre} from "@/src/models/GenreModel";


type propsType = {
    genres: IGenre[]
}

const GenreNameListComponent: FC<propsType> =  ({genres}) => {


    return (
        <>
            {genres.map((genre, index) => <span key={genre.id+"-"+index}>{genre.name}</span>)}
        </>
    );
};

export default GenreNameListComponent;