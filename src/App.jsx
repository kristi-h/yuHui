import { useContext } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { DarkModeContext } from "./contexts/DarkModeContext";
import { SelectedSquareProvider } from "./contexts/SelectedSquareContext";
import Home from "./pages/Home";
import Practice from "./pages/Practice";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  const { isDarkMode } = useContext(DarkModeContext);
  const bgImg = isDarkMode
    ? "url('/assets/chinese-schoolhouse-nightsky.png')"
    : "url('/assets/chinese-schoolhouse-clouds.png')";

  return (
    <div
      className="app-container h-screen bg-gradient-to-b from-[#f7e3cb] to-[#dfb499] text-[#5c3a00]"
      style={{
        backgroundImage: bgImg,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="/practice/:cluster"
                element={
                  <SelectedSquareProvider>
                    <Practice />
                  </SelectedSquareProvider>
                }
              />
            </Route>
          )
        )}
      />
    </div>
  );
}

export default App;
