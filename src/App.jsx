import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/Navbar";
import HomePage from "./pages/Home";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageFour from "./pages/PageFour";

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-courses" element={<PageTwo />} />
        <Route path="/course" element={<PageThree />} />
        <Route path="/fee" element={<PageFour />} />
      </Routes>
    </Router>
  );
}

export default App;
