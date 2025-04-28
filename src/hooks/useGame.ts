import { FetchResponse } from "./useData";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import ms from "ms";
import useGameQueryStore from "../store";


export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
  }

  
 
const apiClient = new ApiClient<Game>("/games");

  

const useGame = () => {
const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({pageParam = 1}) =>
      apiClient
        .getAll({
          params: {
            genres: gameQuery.genreId,
            platforms: gameQuery.platformId,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            page: pageParam,

          },
        }),
        getNextPageParam: (lastPage, allPages) => {
          return lastPage.next  ? allPages.length + 1 : undefined;
        },
        staleTime: ms("1 day"),
  
  })
}

// const useGame = (gameQuery: GameQuery) => useData<Game>("/games", {
//   params: { 
//     genres: gameQuery.genre?.id, 
//     platform: gameQuery.platform?.id,
//     ordering: gameQuery.sortOrder,
//     search: gameQuery.searchText,
//   }}, 
//   [gameQuery]);
    

export default useGame;  