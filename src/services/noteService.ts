import axios from "axios";
import type { Note } from "../types/note";

export interface NotesHttpResponse {
  results: Note[];
  total_pages: number;
  total_results: number;
}

const MY_KEY = import.meta.env.VITE_NOTEHUB_TOKEN;
const BASE_URL = "https://notehub-public.goit.study/api";

export const fetchNotes = async (query: string): Promise<NotesHttpResponse> => {
  const options = {
    params: {
      query,
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${MY_KEY}`,
    },
  };

  const response = await axios.get<NotesHttpResponse>(BASE_URL, options);

  return response.data;
};
