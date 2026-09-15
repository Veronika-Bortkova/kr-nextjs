import React, {FC} from 'react';
import "./MovieInfoHeaderComponent.css"
import {IMovie} from "@/src/models/MovieModel";
import GenreNameListComponent from "@/src/components/GenreNameListComponent/GenreNameListComponent";

type PropsType = {
    movie: IMovie
}
const MovieInfoHeaderComponent:FC<PropsType> = ({movie}) => {
    return (
        <div className={"wrapperMovieInfo"}>
            <div className={"h1WithGenre"}>
                <h1>{movie.title}</h1>
                <div className={"genresOfCard"}>
                    <GenreNameListComponent genres={movie.genres || []}/>
                </div>
            </div>
            <p className={"Release"}>Release Date: {movie.release_date}</p>
            <p className={"OriginalAudio"}>Original Audio - {movie.original_language}</p>
            <p className={"Adult"}>Adult Content: {movie.adult ? "Yes" : "No" }</p>
        </div>
    );
};

export default MovieInfoHeaderComponent;