import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import { Toaster } from "react-hot-toast";
import css from "./App.module.css";
import Pagination from "../Pagination/Pagination";
import NoteList from "../NoteList/NoteList";
import SearchBox from "../SearchBox/SearchBox";
import { useQuery } from "@tanstack/react-query";
import { fetchNotes, type NotesHttpResponse } from "../../services/noteService";
import { useState } from "react";
import Modal from "../Modal/Modal";
import NoteForm from "../NoteForm/NoteForm";

function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const {
    data: { notes = [], totalPages = 0 } = {},
    isLoading,
    isError,
    error,
  } = useQuery<NotesHttpResponse, Error>({
    queryKey: ["notes", currentPage],
    queryFn: () => fetchNotes(currentPage),
  });

  return (
    <>
      <div className={css.app}>
        <header className={css.toolbar}>
          <SearchBox />
          {totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
          <button
            className={css.button}
            onClick={() => {
              setIsOpenModal(true);
            }}
          >
            Create note +
          </button>
        </header>
        {notes.length > 0 && <NoteList notes={notes || []} />}
        {isLoading && <Loader />}
        {isError && <ErrorMessage error={error?.message || "Ooops"} />}
      </div>
      {isOpenModal && (
        <Modal
          onClose={() => {
            setIsOpenModal(false);
          }}
        >
          <NoteForm onClose={() => {}} />
        </Modal>
      )}
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
}

export default App;
