import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Motion from "./pages/Motion";
import MotionClip from "./pages/MotionClip";
import Stills from "./pages/Stills";
import { createContext, useState } from "react";
import Portraits from "./pages/Portraits";
import About from "./pages/About";
import Other from "./pages/Other";
export const Context = createContext();

function App() {
  const [showNav, setShowNav] = useState(false);
  const router = createHashRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/motion",
      element: <Motion />,
    },
    {
      path: "/motion/:id",
      element: <MotionClip />,
    },
    {
      path: "/motion/other",
      element: <Other />,
    },
    {
      path: "/stills",
      element: <Stills />,
    },
    {
      path: "/stills/:id",
      element: <Portraits />,
    },
    {
      path: "/about",
      element: <About />,
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
