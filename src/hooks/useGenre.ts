import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}


const useGenre = () => ({data: genres, isloading: false, error: null});

export default useGenre