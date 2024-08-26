import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages";
import GalleryPage from "./pages/gallery";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<IndexPage />} />
        <Route exact path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
