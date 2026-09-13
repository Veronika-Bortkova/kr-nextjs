import React, {FC} from 'react';
import {getMoviesOfGenre} from "@/src/services/api.service";
import SortComponent from "@/src/components/SortComponent/SortComponent";
import MoviesListCardComponent from "@/src/components/MoviesListCardComponent/MoviesListCardComponent";
import "./MoviesListOfGenreComponent.css"

type Props = {
    id: string;
    page?: string;
    sort: string
}

const MovieListOfGenreComponent:FC<Props> = async ({id, page, sort}) => {
    const moviesWithGenreObj = await getMoviesOfGenre(Number(id),page || "1", sort || "popularity.desc");
    const moviesWithGenre = moviesWithGenreObj.results;

    return (
        <div className={"wrapper"}>
            <SortComponent searchParams={{sort,page}} basePath={"/movies_of_genre/"+id}/>
            <div className={"GridMovieList"}>
                {moviesWithGenre.map(movie => <MoviesListCardComponent key={movie.id} movie={movie} isActive={id === String(movie.id)}/>)}
            </div>
        </div>
    );
};

export default MovieListOfGenreComponent;