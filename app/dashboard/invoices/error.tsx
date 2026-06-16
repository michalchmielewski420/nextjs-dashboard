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
    // Logujemy błąd w konsoli serwera, żeby programista wiedział co się stało
    console.error(error);
  }, [error]);
 
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <h2 className="text-center text-xl font-semibold">Something went wrong!</h2>
      <p className="text-gray-500 text-sm">Wystąpił nieoczekiwany błąd aplikacji.</p>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Funkcja reset() próbuje wyrenderować stronę ponownie
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}