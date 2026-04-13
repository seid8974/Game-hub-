import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import React, { useEffect, useState } from "react";
import useData from "./useData";
import type { Genre } from "./useGenres";
import type { GameQuery } from "@/App";

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

// interface FetchGamesResponse {
//   count: number;
//   results: Game[];
// }

const useGames = (
  gameQuery: GameQuery
  // selectedGenre: Genre | null,
  // selectedPlatform: Platform | null,
) =>
  useData<Game>(
    "/games",
    { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id } },
    [gameQuery],
  );

//   {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");
//   const [ isLoading,  setLoading] = useState(false);

//   useEffect(() => {
// const controller = new AbortController();

// setLoading(true);

//     apiClient
//       .get<FetchGamesResponse>("/games", { signal: controller.signal})
//       .then((res) => {
//         console.log(res.data);
//         setGames(res.data.results || []);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if ( err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });

//       return () => controller.abort();
//   }, []);

//   return { games, error, isLoading };
// }

export default useGames;
