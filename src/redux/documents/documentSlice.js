import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_API_URL;

// Upload a PDF
export const uploadDocument = createAsyncThunk(
  "documents/upload",
  async (file, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post(`${API_URL}/documents/upload`, formData);
      return res.data.document;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "Upload failed");
    }
  }
);

// Fetch documents
export const fetchDocuments = createAsyncThunk("documents/fetch", async () => {
  const res = await axios.get(`${API_URL}/documents`);
  return res.data;
});

// Delete document
export const deleteDocument = createAsyncThunk(
  "documents/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/documents/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue("Delete failed");
    }
  }
);

const documentSlice = createSlice({
  name: "documents",
  initialState: {
    list: [],
    loading: false,
    error: null,
    success: null,
  },
  reducers: {
    clearMessages(state) {
      state.error = null;
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // Upload
      .addCase(uploadDocument.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadDocument.fulfilled, (state, action) => {
        state.loading = false;
        state.success = "Document uploaded successfully";
        state.list.unshift(action.payload);
      })
      .addCase(uploadDocument.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch
      .addCase(fetchDocuments.fulfilled, (state, action) => {
        state.list = action.payload;
      })

      // Delete
      .addCase(deleteDocument.fulfilled, (state, action) => {
        state.list = state.list.filter((d) => d.id !== action.payload);
        state.success = "Document deleted";
      })
      .addCase(deleteDocument.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { clearMessages } = documentSlice.actions;
export default documentSlice.reducer;
