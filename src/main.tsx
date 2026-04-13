import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/Provider.tsx"; 
import theme from "./theme.ts";
import "./index.css";
import App from "./App.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider value={theme}>
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
      <App />
    </Provider>
  </StrictMode>,
);
