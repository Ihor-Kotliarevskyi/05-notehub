import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import { Toaster } from "react-hot-toast";
import css from "./App.module.css";
import Pagination from "../Pagination/Pagination";
import NoteList from "../NoteList/NoteList";
import SearchBox from "../SearchBox/SearchBox";

function App() {
  return (
    <>
      <div className={css.app}>
        <header className={css.toolbar}>
          <SearchBox />
          <Pagination
            totalPages={1}
            currentPage={1}
            setCurrentPage={() => {}}
          />
          <button className={css.button}>Create note +</button>
        </header>
        <NoteList />
        <Loader />
        <ErrorMessage error={"error.message"} />
      </div>
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
}

export default App;
