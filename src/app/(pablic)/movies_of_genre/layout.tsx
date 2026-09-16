import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Movies by Genres",
    description: "Movie Catalog by Genres",
};

type Props = {
    children: React.ReactNode;
}

const MoviesWithGenerPlaceholderLayout = ({ children }: Props) => {
    return (
        <div className={"main"}>
            {children}
        </div>

    );
}


export default MoviesWithGenerPlaceholderLayout;