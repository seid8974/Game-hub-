import { ChakraProvider, Theme } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import theme from "../../theme";

type ProviderProps = {
  children: React.ReactNode;
  value: typeof theme;
};

// export function Provider({ children, value }: any) {
//   return (
//     <ThemeProvider attribute="class" defaultTheme="dark">
//       <ChakraProvider value={value}>
//         {children}
//       </ChakraProvider>
//     </ThemeProvider>
//   );
// }

export function Provider({ children, value }: ProviderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <ChakraProvider value={value}>{children}</ChakraProvider>
    </ThemeProvider>
  );
}
