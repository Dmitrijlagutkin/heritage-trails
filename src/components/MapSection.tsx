import { useState } from "react";

export const MapSection = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="map-section">
      <h2>Map Section</h2>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
};
