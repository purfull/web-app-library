import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/Navbar";
import HomePage from "./pages/Home";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageFour from "./pages/PageFour";
import PageFive from "./pages/PageFive";

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-courses" element={<PageTwo />} />
        <Route path="/course" element={<PageThree />} />
        <Route path="/all-fee" element={<PageFour />} />
        <Route path="/fee" element={<PageFive />} />
      </Routes>
    </Router>
  );
}

export default App;
