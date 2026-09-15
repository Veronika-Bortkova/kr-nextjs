import React, {FC} from 'react';
import "./MovieInfoOverviewComponent.css"
import {IMovie} from "@/src/models/MovieModel";

type propsType = {
    movie:IMovie
}

const MovieInfoOverviewComponent:FC<propsType> = ({movie}) => {
    return (
        <div className={"overview"}>
            <p>{movie.overview}</p>
        </div>
    );
};

export default MovieInfoOverviewComponent;