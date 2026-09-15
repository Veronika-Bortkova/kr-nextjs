import React from 'react';
import "./MovieCardPage.css"
import MovieCardComponent from "@/src/components/MovieCardComponent/MovieCardComponent";

type Props = {
    params: Promise<{ id: string }>;

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