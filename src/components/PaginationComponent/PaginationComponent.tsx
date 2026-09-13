import React, {FC} from 'react';
import "./PaginationComponent.css"
import Link from "next/link";

type PropsType = {
    currentPage: number;
    pagesFromParent?: number;
    sort: string;
    basePath: string
}

const PaginationComponent:FC<PropsType> = ({currentPage, pagesFromParent, sort = 'popularity.desc',basePath }) => {
    const calculatedPages = pagesFromParent || 500;
    const totalPages = calculatedPages > 500 ? 500 : calculatedPages;
    const pageNumbers: number[] = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="wrapperPagination">
            <div className="paginationBlock">
                <ul className="pagination-container">


                    {currentPage > 1 && (
                        <li className="page-item prev">
                            <Link href={basePath + "?page=" + (currentPage - 1) + "&sort=" + sort } className="page-link">
                                ← Prev
                            </Link>
                        </li>
                    )}


                    {startPage > 1 && (
                        <>
                            <li className="page-item">
                                <Link href={basePath + "?page=1" + "&sort=" + sort} className="page-link">1</Link>
                            </li>
                            {startPage > 2 && <li className="page-item break">...</li>}
                        </>
                    )}


                    {pageNumbers.map(page => {
                        const isCurrent = page === currentPage;
                        return (
                            <li
                                key={page}
                                className={isCurrent ? "page-item activePage" : "page-item"}
                            >
                                <Link href={basePath + "?page=" + page + "&sort=" + sort} className="page-link">
                                    {page}
                                </Link>
                            </li>
                        );
                    })}


                    {endPage < totalPages && (
                        <>
                            {endPage < totalPages - 1 && <li className="page-item break">...</li>}
                            <li className="page-item">
                                <Link href={basePath + "?page=" + totalPages + "&sort=" + sort} className="page-link">{totalPages}</Link>
                            </li>
                        </>
                    )}


                    {currentPage < totalPages && (
                        <li className="page-item next">
                            <Link href={basePath + "?page=" + (currentPage + 1) + "&sort=" + sort} className="page-link">
                                Next →
                            </Link>
                        </li>
                    )}

                </ul>
            </div>
        </div>
    );
};

export default PaginationComponent;