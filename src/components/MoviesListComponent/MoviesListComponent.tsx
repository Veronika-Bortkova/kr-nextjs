import React from 'react';
import {getAllMovies} from "@/src/services/api.service";
import MoviesListCardComponent from "@/src/components/MoviesListCardComponent/MoviesListCardComponent";
import "./MoviesListComponent.css"
import SortComponent from "@/src/components/SortComponent/SortComponent";

interface SearchParams {
    page?: string;
    id?: string;
    sort?: string
}

const MoviesListComponent = async ({ searchParams }: { searchParams: SearchParams }) => {
    const { page } = await searchParams;
    const currentSort = searchParams.sort || "popularity.desc";
    const moviesObj = await getAllMovies(page ||"1", currentSort || "popularity.desc");
    const id = searchParams.id;

    const movies = moviesObj.results;

    return (

        <div className={"wrapper"}>

            <SortComponent searchParams={searchParams} basePath={"/"}/>

            <div className={"GridMovieList"}>
                {movies.map(movie => <MoviesListCardComponent movie={movie} key={movie.id} isActive={id === String(movie.id)}/>)}
            </div>
        </div>
    );
};

export default MoviesListComponent;