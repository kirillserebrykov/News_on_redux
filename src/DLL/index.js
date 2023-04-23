import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=ua&apiKey=${
      import.meta.env.VITE_API_TOKEN
    }`
  );
  return response.data.articles;
});
    