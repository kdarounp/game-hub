import { GameQuery } from "../App";
import useData, { FetchResponse } from "./useData";
import { Genre } from "./useGenre";
import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";

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

  

const useGame = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .getAll({
          params: {
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        }),
  })


// const useGame = (gameQuery: GameQuery) => useData<Game>("/games", {
//   params: { 
//     genres: gameQuery.genre?.id, 
//     platform: gameQuery.platform?.id,
//     ordering: gameQuery.sortOrder,
//     search: gameQuery.searchText,
//   }}, 
//   [gameQuery]);
    

export default useGame;  