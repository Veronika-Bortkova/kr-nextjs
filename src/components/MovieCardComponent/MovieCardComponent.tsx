import React, {FC} from 'react';
import "./MovieCardComponent.css"
import {getMovieById} from "@/src/services/api.service";
import PosterPreviewComponent from "@/src/components/PosterPreviewComponent/PosterPreviewComponent";
import MovieInfoHeaderComponent from "@/src/components/MovieInfoHeaderComponent/MovieInfoHeaderComponent";
import StarsRatingComponent from "@/src/components/StarsRatingComponent/StarsRatingComponent";
import MovieInfoOverviewComponent from "@/src/components/MovieInfoOverviewComponent/MovieInfoOverviewComponent";

type Props = {
    id: string
}

const MovieCardComponent:FC<Props> = async ({id}) => {
const movie = await getMovieById(id);

    return (
        <div className={"movieCard"}>
            <div className={"topBlock"}>
                <PosterPreviewComponent poster_path={movie.backdrop_path} size={"w500"}/>
                <div className={"wrapperInfoWithStar"}>
                    <MovieInfoHeaderComponent movie={movie}/>
                    <div className={"wrapperStarCount"} >
                        <StarsRatingComponent vote_average={movie.vote_average}/>
                        <p className={"vote"}>{movie.vote_count} votes</p>
                    </div>
                </div>
            </div>
            <MovieInfoOverviewComponent movie={movie}/>
        </div>
    );
};

export default MovieCardComponent;