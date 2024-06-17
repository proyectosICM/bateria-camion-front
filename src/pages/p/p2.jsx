import React, { useEffect } from "react";

export function P2() {
  useEffect(() => {
    // Eliminar todos los elementos del localStorage
    localStorage.clear();
  }, []);
  return (
    <div>
      <h1>P2</h1>
    </div>
  );
}
