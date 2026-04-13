// import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// const config: ThemeConfig = {
//   initialColorMode: "dark",
// };

// const theme = extendTheme({ config });

// export default theme;

// import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// const config = defineConfig({
//   theme: {
//     initialColorMode: "dark",
//   },
// });

// const system = createSystem(defaultConfig, config);

// export default system;



import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          500: { value: "teal" },
        },
      },
    },
  },
});

const theme = createSystem(defaultConfig, config);

export default theme;









