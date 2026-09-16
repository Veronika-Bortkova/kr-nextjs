import React, {FC} from 'react';
import {getMoviesOfSearch} from "@/src/services/api.service";
import "./MuvieListOfSearchComponent.css"
import {IMovie, IMoviesObj} from "@/src/models/MovieModel";
import MoviesListCardComponent from "@/src/components/MoviesListCardComponent/MoviesListCardComponent";
type Props = {
    moviesSearch: IMovie[]
}

const MuvieListOfSearchComponent: FC<Props> =  ({moviesSearch }) => {

    return (
        <div className={"GridMovieList"}>
            {
                moviesSearch.length === 0 ? (
                    <div className={"noResults"}>
                        <p>No movies found matching your search.</p>
                    </div>
                ) : (
                    moviesSearch.map(movie => <MoviesListCardComponent movie={movie} key={movie.id}/>)
                )
            }
        </div>
    );
};

export default MuvieListOfSearchComponent;