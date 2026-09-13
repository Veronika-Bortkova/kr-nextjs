import React from 'react';
import {Metadata} from "next";
import {getGenres} from "@/src/services/api.service";
import GenresBadgesComponent from "@/src/components/GenresBadgesComponent/GenresBadgesComponent";
import MovieListOfGenreComponent from "@/src/components/MuvieListOfGenreComponent/MovieListOfGenreComponent";
import PaginationComponent from "@/src/components/PaginationComponent/PaginationComponent";
import "./moviesOfGenrePage.css"
import {getSafeParam} from "@/src/helpers/utils";

type Props = {
    params: Promise<{id:string}>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const generateMetadata = async ({params}:Props):Promise<Metadata> =>{
    const {id} = await params;
    const {genresDictionary} = await getGenres();
    const nameGenre = genresDictionary[Number(id)];

    return {
        title: `${nameGenre} Movies `,
        description: `Movie Catalog: ${nameGenre}`
    }
}

const moviesOfGenrePage = async ({searchParams, params}:Props) => {
    const resolvedSearchParams = await searchParams;
    const genreId = getSafeParam(resolvedSearchParams.genreId, "");
    const sort = getSafeParam(resolvedSearchParams.sort, "popularity.desc");
    const page = getSafeParam(resolvedSearchParams.page, "1");
    const {id} = await params;


    return (
        <div>
            <div>
                <div className={"moviesPage"}>
                    <GenresBadgesComponent searchParams={{genreId}}/>
                    <MovieListOfGenreComponent sort={sort} id={id} page={page}/>
                </div>
                <PaginationComponent currentPage={resolvedSearchParams.page ? Number(resolvedSearchParams.page) : 1} pagesFromParent={500} sort={sort || 'popularity.desc'} basePath={"/movies_of_genre/" + id}/>
            </div>
            
        </div>
    );
};

export default moviesOfGenrePage;