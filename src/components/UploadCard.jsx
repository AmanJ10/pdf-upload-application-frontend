import { useDispatch, useSelector } from "react-redux";
import {
  uploadDocument,
  clearMessages,
} from "../redux/documents/documentSlice";
import { useState } from "react";

export default function UploadCard() {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.documents);

  const [file, setFile] = useState(null);

  const MAX_SIZE = 10 * 1024 * 1024; // 10MB

  const handleUpload = (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file.");
      return;
    }

    if (file.size > MAX_SIZE) {
      alert("File size must be less than 10MB");
      return;
    }

    if (file.type !== "application/pdf") {
      alert("Only PDF files are allowed");
      return;
    }

    dispatch(uploadDocument(file));
    setFile(null);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">
        Upload Medical Document
      </h2>

      <form onSubmit={handleUpload} className="space-y-4">
        <input
          type="file"
          accept="application/pdf"
          className="block w-full border border-gray-300 rounded-lg p-2"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Uploading..." : "Upload PDF"}
        </button>
      </form>

      {error && <p className="text-red-600 mt-3">{error}</p>}
      {success && <p className="text-green-600 mt-3">{success}</p>}
    </div>
  );
}
