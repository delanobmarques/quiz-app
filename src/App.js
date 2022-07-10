import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FinalScreen from "./pages/final-screen.page";
import Home from "./pages/home.page";
import Questions from "./pages/questions.page";
import Settings from "./pages/settings.page";

const App = () => {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/questions" element={<Questions/>}/>
          <Route exact path="/settings" element={<Settings/>}/>
          <Route exact path="/score" element={<FinalScreen/>}/>
      </Routes>
    </Router>
  );
}

export default App;
