import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import { Toaster } from "react-hot-toast";
import css from "./App.module.css";
import Pagination from "../Pagination/Pagination";

function App() {
  return (
    <>
      <div className={css.app}>
        {2 > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
        {isLoading && <Loader />}
        {isError && <ErrorMessage error={error.message} />}
        {totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
        <Toaster position="top-center" reverseOrder={true} />
      </div>
    </>
  );
}

export default App;
