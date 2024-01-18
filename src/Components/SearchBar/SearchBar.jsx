import PropTypes from "prop-types";

// src/components/SearchBar/SearchBar.jsx

const SearchBar = ({ onSearch }) => {
  return (
    <div className="flex">
      <div className="relative w-full overflow-hidden rounded-lg border-2 border-[#1C4336] text-[#1C4336] md:min-w-[380px] lg:min-w-[440px]">
        <input
          type="search"
          className="z-20 block w-full bg-white px-4 py-2.5 pr-10 text-[#1C4336] placeholder:text-[#1C4336] focus:outline-none"
          placeholder="Search Book"
          onChange={(e) => onSearch(e.target.value)}
          required
        />
        <button
          type="submit"
          className="absolute right-0 top-0 flex h-full items-center rounded-r-lg bg-[#1C4336] px-4 py-2.5 text-sm text-white"
        >
          Search
        </button>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
