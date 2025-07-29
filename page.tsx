import BookCard from '../components/BookCard';
import HistoryModal from '../components/HistoryModal';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">📚 Book Lending System</h1>
      <BookCard />
      <HistoryModal />
    </main>
  );
}
