import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Heading,
  Text,
} from "@chakra-ui/react";

interface Props {
  onselectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onselectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner display="block" mx="auto" />;

  return (
    <>
      <Heading paddingLeft={4} fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>

      <List.Root>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY='4px' paddingX={3}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background) ?? undefined}
                alt={genre.name}
              />
              <Text
                whiteSpace="normal"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize={"lg"}
                cursor="pointer"
                // textAlign="left"
                _hover={{ textDecoration: "underline" }}
                onClick={() => onselectGenre(genre)}
              >
                {genre.name}
              </Text>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
