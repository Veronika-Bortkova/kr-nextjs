import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Movie Card",
    description: "Movie Info",
};

type Props = {
    children: React.ReactNode;
}

const MoviesCardLayout = ({ children }: Props) => {
    return (
        <div>
            {children}
        </div>

    );
}


export default MoviesCardLayout;