import { useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <div>some text</div>
    </ThemeProvider>
  );
}

export default App;
