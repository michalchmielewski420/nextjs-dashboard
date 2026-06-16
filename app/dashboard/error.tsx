'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Logujemy błąd w konsoli serwera, żeby deweloper wiedział, co się stało
    console.error('Przechwycono błąd aplikacji:', error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center gap-4 py-20">
      <h2 className="text-center text-xl font-semibold text-gray-900">
        Ups! Coś poszło nie tak po stronie serwera.
      </h2>
      <p className="text-sm text-gray-500 max-w-md text-center">
        Wystąpił nieoczekiwany błąd podczas komunikacji z bazą danych lub renderowania komponentu.
      </p>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Funkcja reset spróbuje ponownie wyrenderować dany segment strony bez przeładowania całości!
          () => reset()
        }
      >
        Spróbuj ponownie
      </button>
    </main>
  );
}