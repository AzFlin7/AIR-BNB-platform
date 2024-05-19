"use client";

// 'use client' marks this page as a Client Component
// https://beta.nextjs.org/docs/rendering/server-and-client-components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen w-full items-center justify-center">
      <div className="mx-auto flex h-24 w-72 flex-shrink flex-col items-center justify-center rounded-2xl bg-red-100 py-5 px-8">
        <div>Something went wrong!</div>
        <button onClick={() => reset()}>Reset error boundary</button>
      </div>
    </div>
  );
}
