import {IMovie, IMoviesObj} from "@/src/models/MovieModel";
import {baseUrlMovies, genresUrl, urlMovieById, urlMoviesBySearch} from "@/src/constants/urls";
import {token} from "@/src/constants/authorization";
import {IGenre, IGenreObj} from "@/src/models/GenreModel";


export const getAllMovies = async (pg:string, sort: string = "popularity.desc"):Promise<IMoviesObj> =>{
    return await fetch(baseUrlMovies + "?page=" + pg + "&sort_by=" + sort, {
        method: 'GET',
        headers: {

            'Authorization': `Bearer ${token}`,
            'accept': 'application/json'
        }
    }).then(value => value.json());
}

export const getGenres = async ():Promise<{genres:IGenre[],genresDictionary:Record<number, string> }>=> {
    const data: IGenreObj =  await fetch(genresUrl, {
        method: 'GET',
        headers: {

            'Authorization': `Bearer ${token}`,
            'accept': 'application/json'
        }
    }).then(value => value.json());
    const genresDictionary = data.genres.reduce((acc, currentGenre) => {
        acc[currentGenre.id] = currentGenre.name;
        return acc;
    }, {} as Record<number, string>);
    return {
        genres: data.genres,
        genresDictionary: genresDictionary
    };

}

export const getMovieById = async (id:string):Promise<IMovie>=>{
    return await fetch(urlMovieById + "/" + id, {
        method: 'GET',
        headers: {

            'Authorization': `Bearer ${token}`,
            'accept': 'application/json'
        }
    }).then(value => value.json());
}

export const getMoviesOfGenre = async (genre:number, pg:string, sort: string = "popularity.desc"):Promise<IMoviesObj> =>{
    return await fetch(baseUrlMovies + "?with_genres=" + genre + "&page=" + pg + "&sort_by=" + sort, {
        method: 'GET',
        headers: {

            'Authorization': `Bearer ${token}`,
            'accept': 'application/json'
        }
    }).then(value => value.json());
}

export const getMoviesOfSearch = async (search:string, pg:string) =>{
    return await fetch(urlMoviesBySearch + "?query=" + search + "&page=" + pg, {
        method: 'GET',
        headers: {

            'Authorization': `Bearer ${token}`,
            'accept': 'application/json'
        }
    }).then(value => value.json());
}
