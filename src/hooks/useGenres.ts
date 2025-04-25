import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";


export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const apiClient = new ApiClient<Genre>("/genres");


const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    
   
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: genres,

})

export default useGenres
