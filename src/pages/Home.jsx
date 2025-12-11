import UploadCard from "../components/UploadCard";
import DocumentsList from "../components/DocumentList";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto space-y-6 mt-8">
      <UploadCard />
      <DocumentsList />
    </div>
  );
}
