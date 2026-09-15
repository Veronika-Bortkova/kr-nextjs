import React from 'react';
import "./MovieCardPage.css"
import MovieCardComponent from "@/src/components/MovieCardComponent/MovieCardComponent";
import {Metadata} from "next";
import {getGenres, getMovieById} from "@/src/services/api.service";

type Props = {
    params: Promise<{ id: string }>;

}

export const generateMetadata = async ({params}:Props):Promise<Metadata> =>{
    const {id} = await params;
    const movie = await getMovieById(id);
    const nameMovie = movie.title;

    return {
        title: nameMovie,
        description: "Description movie - " + movie.title
    }
}

const PagemoviesCard = async ({params}:Props) => {

    const {id} = await params;

    return (
        <div className={"moviesCardPage"}>
            <MovieCardComponent id={id}/>
        </div>
    );
};

export default PagemoviesCard;