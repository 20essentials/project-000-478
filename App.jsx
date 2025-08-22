import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <main className="h-screen w-full relative bg-[url('assets/fondo.avif')] bg-cover">
      <div className="absolute inset-0 bg-[url('assets/rain.png')] opacity-70 animate-rain"></div>
      <div className="absolute inset-0 bg-[url('assets/rain.png')] opacity-70 scale-x-[-1] animate-rain"></div>
      <style>
        {`
          @keyframes rainMove {
            0% { background-position: 0 0; }
            100% { background-position: 20% 100%; }
          }
          .animate-rain { animation: rainMove 0.2s ease-in-out infinite; }
        `}
      </style>
    </main>
  );
};

const rootEl = document.getElementById("root") || (() => {
  const el = document.createElement("div");
  el.id = "root";
  document.body.appendChild(el);
  return el;
})();

createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
