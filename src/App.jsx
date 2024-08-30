import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages";
import GalleryPage from "./pages/gallery";
import ContactPage from "./pages/contactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<IndexPage />} />
        <Route exact path="/gallery" element={<GalleryPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
