import PropTypes from "prop-types";

const SortBar = ({ onSort }) => {
  return (
    <div className="flex items-stretch space-x-3">
      <select
        className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
        onChange={(e) => onSort(e.target.value)}
      >
        <option value="">Sort</option>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="year-asc">Publication Year (Oldest)</option>
        <option value="year-desc">Publication Year (Newest)</option>
      </select>
    </div>
  );
};

SortBar.propTypes = {
  onSort: PropTypes.func.isRequired,
};

export default SortBar;
