import { useDispatch, useSelector } from "react-redux";
import {
  fetchDocuments,
  deleteDocument,
} from "../redux/documents/documentSlice";
import { useEffect } from "react";
import DocumentItem from "./DocumentItem";

export default function DocumentsList() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.documents);
  const API_URL = import.meta.env.VITE_BACKEND_API_URL;

  useEffect(() => {
    dispatch(fetchDocuments());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteDocument(id));
  };

  const handleDownload = (id) => {
    window.open(`${API_URL}/documents/${id}`, "_blank");
  };

  return (
    <div className="space-y-4">
      {list.map((doc) => (
        <DocumentItem
          key={doc.id}
          doc={doc}
          onDelete={handleDelete}
          onDownload={handleDownload}
        />
      ))}
    </div>
  );
}
