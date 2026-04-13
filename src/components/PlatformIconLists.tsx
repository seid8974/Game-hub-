import type { Platform } from "@/hooks/useGames";
import { HStack, Text } from "@chakra-ui/react";
import { FaWindows,FaLinux,FaAndroid,FaPlaystation,FaXbox,FaApple } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";


interface Props {
  platforms: Platform[];
}

const PlatformIconLists = ({ platforms }: Props) => {
const iconMap: {[ key: string]: IconType } ={
    "pc": FaWindows,
    "playstation": FaPlaystation,
    "xbox": FaXbox,
    "nintendo": FaGamepad,
    "ios": MdPhoneIphone,
    "android": FaAndroid,
    "linux": FaLinux,
    "mac": FaApple,
    "web": BsGlobe
}

  return (
    <HStack marginTop={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" key={platform.id}/>
      ))}
    </HStack>
  );
};

export default PlatformIconLists;
