import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FinalScreen from "./pages/final-screen.page";
import Home from "./pages/home.page";
import Questions from "./pages/questions.page";
import Settings from "./pages/settings.page";

const App = () => {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            {/* <Route exact path="/" element={<Home/>}/> */}
            <Route exact path="/" element={<Settings/>}/>
            <Route exact path="/questions" element={<Questions/>}/>            
            <Route exact path="/score" element={<FinalScreen/>}/>
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
