import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

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
  }

  
  interface FetchGameResponse {
    count: number;
    results: Game[];
  }

const useGame = () => {
    const [game, setGame] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isloading, setIsLoading] = useState(false);
  
    useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    
       

      apiClient
        .get<FetchGameResponse>("/games", {signal: controller.signal})
        .then((res) => {
          setGame(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
            if (err.name === "CanceledError") return;
            setError(err.message);
            setIsLoading(false);
          });
        

        return () => {
            controller.abort();
        }
    }, []);

    return { game, error, isloading };
}

export default useGame;