import React from 'react';
import "./globals.css"
import GenresBadgesComponent from "@/src/components/GenresBadgesComponent/GenresBadgesComponent";
import MoviesListComponent from "@/src/components/MoviesListComponent/MoviesListComponent";
import PaginationComponent from "@/src/components/PaginationComponent/PaginationComponent";
import {getSafeParam} from "@/src/helpers/utils";
// type SearchParams = {
//     page?: string;
//     id?: string;
//     genreId?: string;
//     sort?: string
//
// }

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const ALMoviesPage  = async ({searchParams}:Props) => {
    const resolvedSearchParams = await searchParams;
    const sort = getSafeParam(resolvedSearchParams.sort, "popularity.desc");
    const page = getSafeParam(resolvedSearchParams.page, "1");
    const genreId = getSafeParam(resolvedSearchParams.genreId, "");
    const id = getSafeParam(resolvedSearchParams.id, "");
    return (
        <div>
            <div className={"moviesPage"}>
                <GenresBadgesComponent genreId={genreId}/>
                <MoviesListComponent page={page} sort={sort} id={id} />
            </div>
            <PaginationComponent currentPage={Number(page)} pagesFromParent={500} sort={sort} basePath={"/"} />
        </div>
    );
};

export default ALMoviesPage;