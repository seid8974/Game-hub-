import { Box, Flex, Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  //  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  //  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  return (
    <>
      {/* <Button colorPalette={"green"} m={2} p={6}>Click me</Button> */}
      {/* <Button colorPalette={"blue"} mx={4} py={2}>Click me</Button> */}

      {/* <Grid templateAreas={`" nav nav " "aside main"`}> */}
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem
          area={"nav"}
          //  bg={"coral"}
        >
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        {/* <Show above="lg"> */}
        {/* <Show  breakpoint="(min-width: 62em)"> */}
        <GridItem
          area={"aside"}
          // bg={"gold"}
          display={{ base: "none", lg: "block" }}
        >
          {/* Aside */}
          {/* <GenreList selectedGenre={selectedGenre} onselectGenre={(genre) => setSelectedGenre(genre)}  /> */}
          <GenreList
            selectedGenre={gameQuery.genre}
            onselectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
        {/* </Show> */}
        <GridItem
          area={"main"}
          // bg={"dodgerblue"}
        >
          {/* Main */}
          <Box paddingLeft={2} >
            <GameHeading gameQuery={gameQuery} />
            <Flex marginBottom={4} gap={5}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
