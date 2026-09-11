import React, {FC} from 'react';
import PosterPreviewComponent from "@/src/components/PosterPreviewComponent/PosterPreviewComponent";
import GenreNameListComponent from "@/src/components/GenreNameListComponent/GenreNameListComponent";
import {IMovie} from "@/src/models/MovieModel";
import "./MoviesListCardComponent.css"
import Link from "next/link";
import StarsRatingComponent from "@/src/components/StarsRatingComponent/StarsRatingComponent";

type PropsType = {
    movie: IMovie;
    isActive: boolean;
}

const MoviesListCardComponent:FC<PropsType> = ({movie, isActive}) => {
    return (

            <div className={"listCard"}>
                <Link href={"/?id=" + movie.id} className={isActive ? "cardLinkActive" : "cardLink"}>
                     <div className={"top_partCard"}>

                        <PosterPreviewComponent poster_path={movie.poster_path} size={"w342"}/>
                        <h2>{movie.title}</h2>
                         <div className={"genreWrapper"}><GenreNameListComponent genres={movie.genre_ids}/></div>
                     </div>

                        <div className={"stars"}><StarsRatingComponent vote_average={movie.vote_average}/></div>
                </Link>
            </div>

    );
};

export default MoviesListCardComponent;