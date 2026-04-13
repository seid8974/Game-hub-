import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button
} from "@chakra-ui/react";


interface Props {
  onselectGenre: (genre: Genre ) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onselectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner display="block" mx="auto" />;

  return (
    <List.Root>
      {data.map((genre) => (
        <ListItem key={genre.id} padding={2}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"} fontSize={"lg"} variant="plain" _hover={{ textDecoration: "underline" }} onClick={ () => onselectGenre(genre)} >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
