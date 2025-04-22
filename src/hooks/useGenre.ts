import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";


export interface Genre {
    id: number;
    name: string;
    image_background: string;
}


const useGenre = () => useQuery({
    queryKey: ["genres"],
    queryFn: 
        () => apiClient.get<FetchResponse<Genre>>("/genres").then(res => res.data),
   
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: {count: genres.length, results: genres},

})

export default useGenre
