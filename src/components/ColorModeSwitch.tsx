import { HStack, Text, Switch } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      {/* <Switch isChecked={ colorMode === 'dark' } onChange={toggleColorMode} />
        <Text>Dark Mode</Text> */}

       <Switch.Root
        checked={colorMode === "dark"}
        onCheckedChange={toggleColorMode}
        //  colorPalette="green"
         colorPalette={colorMode === "dark" ? "green" : "gray"}
      >
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label whiteSpace="nowrap">Dark mode</Switch.Label>
      </Switch.Root>
    </HStack>
  );
};

// import { HStack, Text } from "@chakra-ui/react";
// import { Button } from "@chakra-ui/react";
// import { useColorMode } from "@/components/ui/color-mode";

// const ColorModeSwitch = () => {
//   const { toggleColorMode } = useColorMode();
//   return (
//     <HStack>
//       <Button variant="outline" onClick={toggleColorMode}>
//         Toggle Mode
//       </Button>
//       {/* <Text>Dark Mode</Text> */}
//     </HStack>
//   );
// };

export default ColorModeSwitch;
