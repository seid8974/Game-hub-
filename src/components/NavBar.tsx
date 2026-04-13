import { HStack,Image,Text } from "@chakra-ui/react";
import gameLogo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return <HStack justifyContent={"space-between"} 
  // padding={"10px"} 
  px="20px" py="5px"
  >
    <Image src={ gameLogo }  boxSize="60px"></Image>
    <ColorModeSwitch />
    {/* <Text>NavBar</Text> */}
  </HStack>;
};

export default NavBar;
