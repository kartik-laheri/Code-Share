import { DarkModeSwitch } from "./components/DarkModeSwitch";
import Home from "./pages/Home";
import { Box } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <Container height="100vh"> */}
      <Box>
        <DarkModeSwitch />
        <Home />
      </Box>
      {/* </Container> */}
    </BrowserRouter>
  );
}

export default App;
