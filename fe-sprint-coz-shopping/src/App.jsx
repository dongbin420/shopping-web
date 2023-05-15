import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./pages/Mainpage";
import ProductPage from "./pages/ProductPage";
import BookmarkPage from "./pages/BookmarkPage";
import "./App.css";

function App() {
  const [isBubbleOpen, setIsBubbleOpen] = useState(false);

  const handleOpenBubble = () => {
    setIsBubbleOpen(true);
  };

  const handleCloseBubble = () => {
    if (isBubbleOpen) {
      setIsBubbleOpen(false);
    }
  };

  return (
    <>
      <Router>
        <Header
          isBubbleOpen={isBubbleOpen}
          handleOpenBubble={handleOpenBubble}
          handleCloseBubble={handleCloseBubble}
        />
        <div className="routes-container" onClick={handleCloseBubble}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/product/list " element={<ProductPage />} />
            <Route path="/bookmark " element={<BookmarkPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
