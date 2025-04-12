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
  
    useEffect(() => {
    const controller = new AbortController();

      apiClient
        .get<FetchGameResponse>("/games", {signal: controller.signal})
        .then((res) => setGame(res.data.results))
        .catch((err) => {
            if (err.name === "CanceledError") return;
            setError(err.message)});

        return () => {
            controller.abort();
        }
    }, []);

    return { game, error };
}

export default useGame;