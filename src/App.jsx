import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/Navbar";
import HomePage from "./pages/Home";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page-two" element={<PageTwo />} />
        <Route path="/page-three" element={<PageThree />} />
      </Routes>
    </Router>
  );
}

export default App;
