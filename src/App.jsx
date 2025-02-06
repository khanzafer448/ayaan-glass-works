import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages";
import GalleryPage from "./pages/gallery";
import ContactPage from "./pages/contactUs";
import GalleryPage2 from "./pages/galleryPage";
import VideoPage from "./pages/videoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<IndexPage />} />
        <Route exact path="/gallery" element={<GalleryPage />} />
        <Route exact path="/gallery2" element={<GalleryPage2 />} />
        <Route exact path="/video" element={<VideoPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
