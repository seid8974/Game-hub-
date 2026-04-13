import type { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import { Menu, Button } from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          variant="ghost"
          size="sm"
          gap="1"
          bg="gray.700"
          _hover={{ bg: "gray.600" }}
        >
          {selectedPlatform?.name || "Platforms"} <ChevronDown size={16} />
        </Button>
      </Menu.Trigger>

      <Menu.Positioner>
        <Menu.Content
          bg="gray.800"
          border="1px solid"
          borderColor="gray.700"
          borderRadius="md"
          p="1"
          minW="250px"
        >
          {data.map((platform) => (
            <Menu.Item
              onClick={() => onSelectPlatform(platform)}
              key={platform.id}
              value={platform.slug}
              _hover={{ bg: "gray.700" }}
              borderRadius="md"
            >
              {platform.name}
            </Menu.Item>
          ))}
          {/* <Menu.Item
            value="pc"
            _hover={{ bg: "gray.700" }}
            borderRadius="md"
          >
            PC
          </Menu.Item>

          <Menu.Item
            value="playstation"
            _hover={{ bg: "gray.700" }}
            borderRadius="md"
          >
            PlayStation
          </Menu.Item>

          <Menu.Item
            value="xbox"
            _hover={{ bg: "gray.700" }}
            borderRadius="md"
          >
            Xbox
          </Menu.Item> */}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
    // <Menu.Root>
    //     <Menu.Trigger asChild>
    //         <Button variant="ghost" size="sm">Platforms <ChevronDown size={16} /></Button>
    //     </Menu.Trigger>
    //     <Menu.Content>
    //         <Menu.Item value='pc'>PC</Menu.Item>
    //         <Menu.Item value='playstation'>PlayStation</Menu.Item>
    //         <Menu.Item value='xbox'>Xbox</Menu.Item>

    //     </Menu.Content>
    // </Menu.Root>
  );
};

export default PlatformSelector;
