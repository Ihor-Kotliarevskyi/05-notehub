import axios from "axios";
import type { Note } from "../types/movie";

export interface NotesHttpResponse {
  results: Note[];
  total_pages: number;
  total_results: number;
}

const MY_KEY = import.meta.env.VITE_NOTEHUB_TOKEN;

export const fetchMovies = async (
  query: string
): Promise<NotesHttpResponse> => {
  const options = {
    params: {
      query,
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${MY_KEY}`,
    },
  };

  const response = await axios.get<NotesHttpResponse>(`https://`, options);

  return response.data;
};
