'use client';

import { useBookStore } from '../store/useBookStore';
import { useState } from 'react';

const BookCard = () => {
  const { books, borrowBook, returnBook, reserveBook } = useBookStore();
  const [reserver, setReserver] = useState('');

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {books.map((book) => (
        <div key={book.id} className="border p-4 rounded bg-white shadow-md">
          <h2 className="text-xl font-bold">{book.title}</h2>
          <p className="text-gray-700">by {book.author}</p>
          <p>Status: {book.isBorrowed ? 'Borrowed' : 'Available'}</p>
          {book.reservedBy && (
            <p className="text-sm text-yellow-600">Reserved by {book.reservedBy}</p>
          )}
          <div className="mt-2 flex flex-col gap-1">
            {!book.isBorrowed ? (
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded"
                onClick={() => borrowBook(book.id)}
              >
                Borrow
              </button>
            ) : (
              <button
                className="bg-green-500 text-white px-2 py-1 rounded"
                onClick={() => returnBook(book.id)}
              >
                Return
              </button>
            )}

            {book.isBorrowed && !book.reservedBy && (
              <>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border p-1 rounded"
                  value={reserver}
                  onChange={(e) => setReserver(e.target.value)}
                />
                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                  onClick={() => {
                    if (reserver.trim()) {
                      reserveBook(book.id, reserver.trim());
                      setReserver('');
                    }
                  }}
                >
                  Reserve
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookCard;
