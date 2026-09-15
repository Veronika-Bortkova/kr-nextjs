import React, {FC} from 'react';
import {getAllMovies} from "@/src/services/api.service";
import MoviesListCardComponent from "@/src/components/MoviesListCardComponent/MoviesListCardComponent";
import "./MoviesListComponent.css"
import SortComponent from "@/src/components/SortComponent/SortComponent";
import Link from "next/link";
import {cookies} from "next/headers";

type PropsType = {
    page?: string;
    sort?: string

}

const MoviesListComponent:FC<PropsType> = async ({page, sort}) => {
    const moviesObj = await getAllMovies(page ||"1", sort || "popularity.desc");
    const movies = moviesObj.results;

    const cookieStore = await cookies();
    const lastMovieIdCookie = cookieStore.get('last_movie_id');

    return (

        <div className={"wrapper"}>

            <SortComponent page={page} sort={sort} basePath={"/"}/>

            <div className={"GridMovieList"}>
                {movies.map(movie => <MoviesListCardComponent movie={movie} key={movie.id}/>)}
            </div>
        </div>
    );
};

export default MoviesListComponent;