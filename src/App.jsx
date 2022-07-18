import { ThemeProvider } from "styled-components";
import { Outlet } from "react-router-dom";
import theme from "./theme";
import GlobalNav from "./components/GlobalNav";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalNav />

      <Outlet />
    </ThemeProvider>
  );
}

export default App;
