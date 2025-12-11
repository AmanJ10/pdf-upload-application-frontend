export default function DocumentItem({ doc, onDelete, onDownload }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex justify-between items-center">
      <div>
        <p className="font-medium text-gray-800">{doc.filename}</p>
        <p className="text-sm text-gray-500">{doc.filesize} bytes</p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => onDownload(doc.id)}
          className="text-blue-600 font-medium hover:underline"
        >
          Download
        </button>

        <button
          onClick={() => onDelete(doc.id)}
          className="text-red-600 font-medium hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
