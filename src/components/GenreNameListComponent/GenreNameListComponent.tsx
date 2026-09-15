import React, {FC} from 'react';
import {getGenres} from "@/src/services/api.service";
import "./GenreNameListComponent.css"
import {IGenre} from "@/src/models/GenreModel";


type propsType = {
    genres: IGenre[] | number []
}

const GenreNameListComponent: FC<propsType> = async ({genres}) => {
    const { genresDictionary } = await getGenres();


    return (
        <>
            {genres.map((value, index) => {

                if (typeof value === "object" && value !== null) {
                    return <span key={value.id + "-" + index}>{value.name}</span>;
                }

                return <span key={value + "-" + index}>{genresDictionary[value] || "Unknown"}</span>;
            })}
        </>
    );
};


export default GenreNameListComponent;