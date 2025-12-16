const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <div className="flex gap-2 mt-12">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`w-8 h-8 border text-sm ${
            currentPage === i + 1
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() =>
          currentPage < totalPages && setCurrentPage(currentPage + 1)
        }
        className="w-8 h-8 border"
      >
        →
      </button>
    </div>
  );
};

export default Pagination;
