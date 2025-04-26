import React, { useState } from "react";

export const MapSection = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container bg-[var(--color-natural-lightgray)] p-6 rounded-lg">
      <h2 className="text-[var(--color-secondary-lightgreen)] font-bold text-2xl mb-4">
        Second Section
      </h2>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-[var(--color-secondary-lightgreen)] text-[var(--color-primary)] px-4 py-2 rounded hover:bg-[var(--color-secondary-lightyellow)] transition-colors"
      >
        Count: {count}
      </button>
    </div>
  );
};
