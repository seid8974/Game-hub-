import type { Game } from "@/hooks/useGames";
import { Card, Text, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import React from "react";
import PlatformIconLists from "./PlatformIconLists";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";
import Emoji from "./Emoji";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    // <Card>
    //     <Image src ={game.background_image} />
    //     <CardBody>
    //         <Heading>{game.name}</Heading>
    //     </CardBody>
    // </Card>
    <Card.Root>
      {/* <Image src={game.background_image} /> */}
      <Image
        src={getCroppedImageUrl(game.background_image) ?? undefined}
        alt={game.name}
      />
      <Card.Body>
        <HStack justifyContent="space-between" marginBottom={4}>
          <PlatformIconLists
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading size="2xl">{game.name}<Emoji rating={game.rating_top} /></Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
