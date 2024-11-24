import React, { useState } from 'react'
import Navbar from './components/Navbar';
import BookReader from './components/BookReader';
import BookmarkList from './components/BookmarkList';
import Footer from './components/Footer';
import "./styles/App.css";

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (bookmark) => {
    setBookmarks((prev) => [...prev, bookmark]);
  };

  return (
    <div>
      <Navbar />
      <BookReader onBookmark={addBookmark} />
      <BookmarkList bookmarks={bookmarks} />
      <Footer />
    </div>
  );
};

export default App;