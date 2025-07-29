'use client';

import { useBookStore } from '../store/useBookStore';

export default function HistoryModal() {
  const { history } = useBookStore();

  return (
    <div className="bg-gray-100 p-4 mt-6 rounded">
      <h3 className="font-bold text-lg mb-2">Lending History</h3>
      <ul className="text-sm text-gray-700 list-disc pl-5">
        {history.map((entry, idx) => (
          <li key={idx}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}
