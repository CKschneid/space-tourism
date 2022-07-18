import { useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalNav from "./components/GlobalNav";
import MobileNav from "./components/MobileNav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      {/* <GlobalNav /> */}
      <MobileNav />
    </ThemeProvider>
  );
}

export default App;
