export const PaginationControl=({currentPage,setCurrentPage,totalPages})=>{
   if (totalPages < 2) return null; 
  return(
     <div className="flex justify-center mt-6 gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-3 btn py-1 border rounded "
        >
          Prev
        </button>
        <ul className="flex gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <li key={index}>
              <button
                className={`px-3 py-1 rounded btn ${
                  currentPage === index + 1
                    ? "bg-purple-600 text-white"
                    : "text-gray-700"
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>

        <button
          disabled={currentPage === totalPages}
          className="btn px-3 py-1 border rounded "
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
  )
} 