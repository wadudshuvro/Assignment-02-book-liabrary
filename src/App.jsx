import { useState } from "react";
import Book from "./Components/Book/Book";
import bookData from "./Components/Book/book.json";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import SearchBar from "./Components/SearchBar/SearchBar";
import SortBar from "./Components/SortBar/SortBar";

function App() {
  const [books, setBooks] = useState(bookData.book);
  const [filteredBooks, setFilteredBooks] = useState(bookData.book);

  const handleSearch = (searchTerm) => {
    const searchResults = books.filter((book) =>
      book.BookName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(searchResults);
  };

  const handleSort = (sortOrder) => {
    const sortedBooks = [...books];
    switch (sortOrder) {
      case "name-asc":
        sortedBooks.sort((a, b) => a.BookName.localeCompare(b.BookName));
        break;
      case "name-desc":
        sortedBooks.sort((a, b) => b.BookName.localeCompare(a.BookName));
        break;
      case "year-asc":
        sortedBooks.sort((a, b) => a.PublishYear - b.PublishYear);
        break;
      case "year-desc":
        sortedBooks.sort((a, b) => b.PublishYear - a.PublishYear);
        break;
      default:
        break;
    }
    setBooks(sortedBooks);
    setFilteredBooks(sortedBooks);
  };

  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="mb-8 lg:mb-10 max-w-7xl p-4 mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
        <SearchBar onSearch={handleSearch} />
        <SortBar onSort={handleSort} />
      </div>
      <div className="grid grid-cols-4 gap-4 p-4">
        {filteredBooks.map((book, index) => (
          <Book key={index} bookData={book} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
