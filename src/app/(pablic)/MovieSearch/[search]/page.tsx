import React from 'react';
import GenresBadgesComponent from "@/src/components/GenresBadgesComponent/GenresBadgesComponent";
import PaginationComponent from "@/src/components/PaginationComponent/PaginationComponent";
import {getSafeParam} from "@/src/helpers/utils";
import MuvieListOfSearchComponent from "@/src/components/MuvieListOfSearchComponent/MuvieListOfSearchComponent";
import {getMovieById, getMoviesOfSearch} from "@/src/services/api.service";
import {Metadata} from "next";


type Props = {
    params: Promise<{ search: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;

}

export const generateMetadata = async ({params}:Props):Promise<Metadata> =>{
    const {search} = await params;
    return {
        title: "Search results for: " + search,
        description: "Movie search results for: " + search
    }
}

const MovieSearchPage = async ({searchParams, params}:Props) => {
    const resolvedSearchParams = await searchParams;
    const {search} = await params;

    const page = getSafeParam(resolvedSearchParams.page, "1");

    const response = await getMoviesOfSearch(search, page);
    const movies = response?.results || [];
    const totalPages = response?.total_pages || 500;

    return (
        <div>
            <div className={"moviesPage"}>
                <GenresBadgesComponent/>
                <MuvieListOfSearchComponent moviesSearch={movies}/>
            </div>
            <PaginationComponent currentPage={resolvedSearchParams.page ? Number(resolvedSearchParams.page) : 1} pagesFromParent={totalPages} sort={'popularity.desc'} basePath={"/MovieSearch/" + search}/>
        </div>
    );
};

export default MovieSearchPage;