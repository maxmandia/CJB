import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Motion from "./pages/Motion";
import { createContext, useState } from "react";

export const Context = createContext();

function App() {
  const [showNav, setShowNav] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/motion",
      element: <Motion />,
    },
  ]);

  return (
    <div className="App">
      <Context.Provider value={{ showNav, setShowNav }}>
        <RouterProvider router={router} />
      </Context.Provider>
    </div>
  );
}

export default App;
