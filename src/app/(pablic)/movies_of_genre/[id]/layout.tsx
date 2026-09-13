import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Movies by Genres",
    description: "Movie Catalog by Genres",
};

type Props = {
    children: React.ReactNode;
}

const moviesOfGenreLayout = ({ children }: Props) => {
    return (
        <div>
            {children}
        </div>

    );
}


export default moviesOfGenreLayout;