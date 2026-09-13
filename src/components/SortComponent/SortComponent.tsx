import React, {FC} from 'react';
import "./SortComponent.css"
import Link from "next/link";

type PropsType = {
    sort?: string;
    page?: string;
    id?: string;
    [key: string]: string | undefined;
    basePath: string
}

const SortComponent: FC<PropsType> = ({sort, page, id, basePath}) => {
    const currentSort = sort || 'popularity.desc';

    return (
        <div className="sortBlock">
            <span>Sort by: </span>
            <div className="sortLinks">
                <Link
                    href={basePath + "?page=1&sort=popularity.desc"}
                    className={currentSort === 'popularity.desc' ? 'sortLink activeSort' : 'sortLink'}
                >
                    Popularity (High to Low)
                </Link>
                <Link
                    href={basePath + "?page=1&sort=vote_average.desc"}
                    className={currentSort === 'vote_average.desc' ? 'sortLink activeSort' : 'sortLink'}
                >
                    Rating (High to Low)
                </Link>
                <Link
                    href={basePath + "?page=1&sort=primary_release_date.desc"}
                    className={currentSort === 'primary_release_date.desc' ? 'sortLink activeSort' : 'sortLink'}
                >
                    Release Date (Newest)
                </Link>
                <Link
                    href={basePath + "?page=1&sort=revenue.desc"}
                    className={currentSort === 'revenue.desc' ? 'sortLink activeSort' : 'sortLink'}
                >
                    Box Office (Top Grossing)
                </Link>
            </div>
        </div>
    );
};

export default SortComponent;