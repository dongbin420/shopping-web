import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./pages/Mainpage";
import ProductPage from "./pages/ProductPage";
import BookmarkPage from "./pages/BookmarkPage";
import "./App.css";

function App() {
  const [isBubbleOpen, setIsBubbleOpen] = useState(false);
  const [productInfo, setProductInfo] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);
  // const [bookmarks, setBookmarks] = useState(() => {
  //   const storedBookmarks = localStorage.getItem("bookmarks");
  //   return storedBookmarks ? JSON.parse(storedBookmarks) : [];
  // });

  const handleOpenBubble = () => {
    setIsBubbleOpen(true);
  };

  const handleCloseBubble = () => {
    if (isBubbleOpen) {
      setIsBubbleOpen(false);
    }
  };

  const getProducts = () => {
    return axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
      .then((res) => {
        setProductInfo(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const loadBookmarks = () => {
    const storedBookmarks = localStorage.getItem("bookmarks");
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  };

  const saveBookmarks = () => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  };

  const addBookmark = (bookmarkData) => {
    const newBookmark = bookmarkData;
    const updatedBtnBookmark = {
      ...newBookmark,
      isBookmarked: !newBookmark.isBookmarked,
    };
    if (
      !newBookmark.isBookmarked &&
      !bookmarks.some((obj) => obj.id === newBookmark.id)
    ) {
      setBookmarks([...bookmarks, updatedBtnBookmark]);
      //버튼 노란색
    } else if (newBookmark.isBookmarked) {
      const updatedBookmarks = bookmarks.filter(
        (bookmark) => bookmark.id !== newBookmark.id
      );
      setBookmarks(updatedBookmarks);
      //북마크 삭제(해당상품 북마크 목록에서 지우기)
      //버튼 회색
    }

    setProductInfo((prevProductInfo) =>
      prevProductInfo.map((ele) =>
        ele.id === newBookmark.id ? updatedBtnBookmark : ele
      )
    );
  };

  useEffect(() => {
    getProducts();
    loadBookmarks();
  }, []);

  useEffect(() => {
    if (bookmarks.length > 0) {
      saveBookmarks();
    }
  }, [bookmarks]);

  let updatedProductByBookmark = productInfo;

  if (productInfo) {
    updatedProductByBookmark = productInfo.map((product) => {
      const bookmark = bookmarks.find((bookmart) => bookmart.id === product.id);
      if (bookmark) {
        return bookmark;
      } else {
        return product;
      }
    });
  }

  return (
    <>
      <Router>
        <Header
          isBubbleOpen={isBubbleOpen}
          handleOpenBubble={handleOpenBubble}
          handleCloseBubble={handleCloseBubble}
        />

        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                productInfo={updatedProductByBookmark}
                addBookmark={addBookmark}
              />
            }
          />
          <Route path="/product/list " element={<ProductPage />} />
          <Route
            path="/bookmark"
            element={
              <BookmarkPage bookmarks={bookmarks} addBookmark={addBookmark} />
            }
          />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
