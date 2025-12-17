import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import { Toaster } from "react-hot-toast";
import css from "./App.module.css";
import Pagination from "../Pagination/Pagination";
import NoteList from "../NoteList/NoteList";
import SearchBox from "../SearchBox/SearchBox";
import { useQuery } from "@tanstack/react-query";
import { getNotes, type NotesHttpResponse } from "../../services/noteService";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const {
    data: { notes = [], totalPages = 0 } = {},
    isLoading,
    isError,
    error,
  } = useQuery<NotesHttpResponse, Error>({
    queryKey: ["notes", currentPage],
    queryFn: () => getNotes(currentPage),
  });

  return (
    <>
      <div className={css.app}>
        <header className={css.toolbar}>
          <SearchBox />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <button className={css.button}>Create note +</button>
        </header>
        {notes.length > 0 && <NoteList notes={notes || []} />}
        {isLoading && <Loader />}
        {isError && <ErrorMessage error={error?.message || "Ooops"} />}
      </div>
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
}

export default App;
