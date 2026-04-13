import { Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";

function App() {
 const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
          <NavBar />
        </GridItem>
        {/* <Show above="lg"> */}
        {/* <Show  breakpoint="(min-width: 62em)"> */}
        <GridItem
          area={"aside"}
          // bg={"gold"}
          display={{ base: "none", lg: "block" }}
        >
          {/* Aside */}
          <GenreList selectedGenre={selectedGenre} onselectGenre={(genre) => setSelectedGenre(genre)}  />
        </GridItem>
        {/* </Show> */}
        <GridItem
          area={"main"}
          // bg={"dodgerblue"}
        >
          {/* Main */}
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
