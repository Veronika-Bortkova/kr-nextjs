import React, {FC} from 'react';
import {getMoviesOfGenre} from "@/src/services/api.service";
import SortComponent from "@/src/components/SortComponent/SortComponent";
import MoviesListCardComponent from "@/src/components/MoviesListCardComponent/MoviesListCardComponent";
import "./MoviesListOfGenreComponent.css"

type PropsType = {
    id: string;
    page?: string;
    sort: string
    nameGenre?: string
}

const MovieListOfGenreComponent:FC<PropsType> = async ({id, page, sort, nameGenre}) => {
    const moviesWithGenreObj = await getMoviesOfGenre(Number(id),page || "1", sort || "popularity.desc");
    const moviesWithGenre = moviesWithGenreObj.results;

    return (
        <div className={"wrapper"}>
            <SortComponent sort={sort} page={page} basePath={"/movies_of_genre/"+id}/>
            <h2>{nameGenre} Movies</h2>
            <div className={"GridMovieList"}>
                {moviesWithGenre.map(movie => <MoviesListCardComponent key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
};

export default MovieListOfGenreComponent;