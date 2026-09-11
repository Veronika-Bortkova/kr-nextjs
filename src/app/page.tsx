import React from 'react';
import "./globals.css"
import GenresBadgesComponent from "@/src/components/GenresBadgesComponent/GenresBadgesComponent";
import MoviesListComponent from "@/src/components/MoviesListComponent/MoviesListComponent";
import PaginationComponent from "@/src/components/PaginationComponent/PaginationComponent";
type SearchParams = {
    page?: string;
    id?: string;
    genreId?: string;
    sort?: string

}

const ALMoviesPage  = async ({ searchParams }: { searchParams: Promise<SearchParams> }) => {
    const resolvedSearchParams = await searchParams;
    return (
        <div>
            <div className={"moviesPage"}>
                <GenresBadgesComponent searchParams={resolvedSearchParams}/>
                <MoviesListComponent searchParams={resolvedSearchParams}/>
            </div>
            <PaginationComponent currentPage={resolvedSearchParams.page ? Number(resolvedSearchParams.page) : 1} pagesFromParent={500} sort={resolvedSearchParams.sort || 'popularity.desc'} basePath={"/"}/>
        </div>
    );
};

export default ALMoviesPage;