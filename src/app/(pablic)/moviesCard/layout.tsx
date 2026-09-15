import type { Metadata } from "next";
import MoviesWithGenerPlaceholderLayout from "@/src/app/(pablic)/movies_of_genre/layout";

export const metadata: Metadata = {
    title: " Movie Card",
    description: "Movie Info",
};

type Props = {
    children: React.ReactNode;
}

const MoviesCardPlaceholderLayout = ({ children }: Props) => {
    return (
        <div>
            {children}
        </div>

    );
}


export default MoviesCardPlaceholderLayout;