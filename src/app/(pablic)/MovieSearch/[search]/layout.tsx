import type { Metadata } from "next";


export const metadata: Metadata = {
    title: " Search Results",
    description: "Movie Search Results",
};

type Props = {
    children: React.ReactNode;
}
const MovieSearchLayout = ({ children }:Props) => {
    return (
        <div>
            {children}
        </div>

    );
}


export default MovieSearchLayout;