import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Movie card",
    description: "description layout",
};

type Props = {
    children: React.ReactNode;
}

const MoviesWithGenerPlaceholderLayout = ({ children }: Props) => {
    return (
        <div>
            {children}
        </div>

    );
}


export default MoviesWithGenerPlaceholderLayout;