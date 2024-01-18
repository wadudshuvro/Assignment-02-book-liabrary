import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";

const Book = ({ bookData, onAddToCart, onToggleFavorite }) => {
  // Add a local state for managing the favorite status
  const [isFavorite, setIsFavorite] = useState(bookData.isFavorite);

  // Function to toggle favorite status and call the onToggleFavorite prop
  const handleToggleFavorite = (book) => {
    const newFavoriteState = !isFavorite;
    setIsFavorite(newFavoriteState);
    onToggleFavorite({ ...book, isFavorite: newFavoriteState }); // Update the book with the new favorite status
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 space-y-3">
      <img
        className="w-full flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4 max-w-[300px]"
        src={bookData.BookImage}
        alt={bookData.BookName}
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-lg font-bold lg:text-xl">
          {bookData.BookName} ({bookData.PublishYear})
        </div>
        <p className="text-gray-700 text-xs lg:text-sm">
          By : {bookData.Writer}
        </p>
        <p className="text-gray-700 text-lg font-bold lg:text-xl">
          ${bookData.Price}
        </p>
        <p className="text-gray-700 text-xs lg:text-sm">
          Rating: {bookData.Rating}
        </p>
        <div className="flex items-center mt-2 space-x-2">
          <button
            className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5"
            onClick={() => onAddToCart(bookData)}
          >
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            Add to Cart
          </button>
          <button
            onClick={() => handleToggleFavorite(bookData)}
            className={`ml-2 flex min-w-[132px] items-center justify-center gap-1 rounded-md py-1.5 text-sm lg:py-1.5 transition-all ${
              isFavorite
                ? "bg-[#DC2954]/[14%] text-[#DC2954] hover:bg-[#DC2954]/[24%]"
                : "bg-[#1C4336]/[14%] text-[#1C4336] hover:bg-[#1C4336]/[24%]"
            }`}
          >
            <FontAwesomeIcon
              icon={faHeart}
              className={`h-5 w-5 ${
                isFavorite ? "text-[#DC2954]" : "text-[#1C4336]"
              }`}
            />
            Favourite
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  bookData: PropTypes.shape({
    BookImage: PropTypes.string,
    BookName: PropTypes.string.isRequired,
    Writer: PropTypes.string.isRequired,
    Price: PropTypes.string.isRequired,
    PublishYear: PropTypes.number.isRequired,
    Rating: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default Book;
