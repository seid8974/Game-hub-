import React, { useEffect } from "react";
import apiClient from "@/services/api-client";
import { useState } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { type Game, type Platform } from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { type Genre } from "@/hooks/useGenres";
import type { GameQuery } from "@/App";


interface Props {
  gameQuery: GameQuery;
// selectedGenre: Genre | null;
// selectedPlatform: Platform | null;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <>
      {error && <Text>{error}</Text>}

      {/* <ul>
        { games.map((game) => <li key={game.id}>{game.name}</li>  )}
      </ul> */}

      <SimpleGrid 
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} 
        gap={10} 
        padding={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer  key={skeleton} >
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
